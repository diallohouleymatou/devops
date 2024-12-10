import {Component, Input, input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FormulaireComponent} from "../formulaire/formulaire.component";
interface Etudiant{
  numero:number;
  prenom:string;
  nom:string;
  classe:string;
}
@Component({
  selector: 'app-table',
  imports: [
    NgForOf,
    FormsModule,
    FormulaireComponent,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  newEtudiant:Etudiant = {
  numero:0,
  prenom:"",
    nom:"",
    classe:"",
  }
  @Input() etudiants : Etudiant[]=[];
  modifier:boolean = false;
  ajouter:boolean = true;

 etudiant: Etudiant = {
   numero:0,
   prenom:"i",
   nom:"hh",
   classe:"nn",
 };
  supprimer(index:number):void{
  this.etudiants.splice(index-1,1);

  }

  etudiantPost($event: Etudiant) {
    this.etudiants.push($event);

  }

  modifierEt(etudiant: Etudiant) {
    this.ajouter = false;
    this.modifier = true;
    this.etudiant = etudiant;

  }
}

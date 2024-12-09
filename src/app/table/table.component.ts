import {Component, Input, input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
    FormsModule
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
  @Input() etudiants!: Etudiant[];


  supprimer(index:number):void{
  this.etudiants.splice(index-1,1);

  }
}

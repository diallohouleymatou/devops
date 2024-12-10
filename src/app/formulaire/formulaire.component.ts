import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableComponent} from '../table/table.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from "@angular/common";
interface Etudiant{
  numero:number;
  prenom:string;
  nom:string;
  classe:string;
}
@Component({
  selector: 'app-formulaire',
    imports: [
        FormsModule,
        NgIf
    ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  etudiants:Etudiant[]=[]

  @Input()newEtudiant:Etudiant = {
    numero:0,
    prenom:"",
    nom:"",
    classe:"",
  }

  @Input() ajouter: boolean = false;
  @Output() etudiantChange: EventEmitter<Etudiant> = new EventEmitter();
  @Input()modifier: boolean = false;
  //@Input() etudiant:Etudiant;



  addNewEtudiant(){
    if(this.newEtudiant.prenom && this.newEtudiant.nom && this.newEtudiant.classe){
      this.newEtudiant.numero += this.etudiants.length + 1;
      this.etudiantChange.emit(this.newEtudiant);
      this.newEtudiant ={
        numero:0,
        prenom:"",
        nom:"",
        classe:"",
      }
    }
  }

}




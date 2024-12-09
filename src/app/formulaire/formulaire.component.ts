import { Component } from '@angular/core';
import {TableComponent} from '../table/table.component';
import {FormsModule} from '@angular/forms';
interface Etudiant{
  numero:number;
  prenom:string;
  nom:string;
  classe:string;
}
@Component({
  selector: 'app-formulaire',
  imports: [
    TableComponent,
    FormsModule
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  etudiants:Etudiant[]=[]
  newEtudiant:Etudiant = {
    numero:0,
    prenom:"",
    nom:"",
    classe:"",
  }

  addNewEtudiant(){
    if(this.newEtudiant.prenom && this.newEtudiant.nom && this.newEtudiant.classe){
      this.newEtudiant.numero += this.etudiants.length + 1;
      this.etudiants.push(this.newEtudiant);
      this.newEtudiant ={
        numero:0,
        prenom:"",
        nom:"",
        classe:"",
      }
    }
  }

}




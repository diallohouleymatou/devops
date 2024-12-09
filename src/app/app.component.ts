import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {NgIf} from '@angular/common';
import {TableComponent} from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormulaireComponent, NgIf, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devops';
  test = false;
  showFormulaire():void{
    if (this.test == false) {
      this.test = true;
    }else{
      this.test = false;
    }
}
}

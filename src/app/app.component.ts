import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {NgIf} from '@angular/common';
import {TableComponent} from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devops';
  test = false;

}

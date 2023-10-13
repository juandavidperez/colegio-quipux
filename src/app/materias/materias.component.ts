import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent {
  selectedItem: string = 'Materias'; // Establece el valor predeterminado


  selectItem(item: string) {
    this.selectedItem = item;
  }
  openModal(modal: string) {
    console.log('Modal abierto' + modal);
  }
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'nombre_materia' },
    });
  }


}

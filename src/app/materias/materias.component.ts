import { Component } from '@angular/core';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent {
  selectedItem: string = 'Materias'; // Establece el valor predeterminado


  selectItem(item: string) {
    this.selectedItem = item;
  }
  openModal(modal: string) {
    console.log('Modal abierto' + modal);
  }
}

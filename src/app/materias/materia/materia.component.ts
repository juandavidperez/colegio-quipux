import { Component } from '@angular/core';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {
  selectedItem: string = 'Materias';


  selectItem(item: string) {
    this.selectedItem = item;
  }
}

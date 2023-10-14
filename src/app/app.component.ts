import { Component } from '@angular/core';
import { MateriasComponent } from './materias/materias.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'colegio-quipux';
}

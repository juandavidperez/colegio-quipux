import { Component } from '@angular/core';
import { MateriasComponent } from './materias/materias.component';

@Component({
  selector: 'app-root',
  template: `
  <app-materias></app-materias>
`,
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'colegio-quipux';
}

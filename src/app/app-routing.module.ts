import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias/materias.component';
import { MateriaComponent } from './materias/materia/materia.component';

const routes: Routes = [
  { path: 'materias', component: MateriasComponent,},
  { path: 'materias/materia', component: MateriaComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

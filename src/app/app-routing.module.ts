import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { Contenido2Component } from './contenido2/contenido2.component';

const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent
  },
  {
    path: 'hola',
    component: Contenido2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

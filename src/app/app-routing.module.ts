import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PERSONASComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

const routes:Routes = [
  {path: '', component: PERSONASComponent},
  {path: 'personas', component: PERSONASComponent},
  {path: 'personas/agregar', component: FormularioComponent},
  {path: 'personas/:id', component: FormularioComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { PERSONASComponent } from './personas/personas.component';

import { LogginService } from './LogginService.service';
import { PersnaService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PERSONASComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LogginService,
    PersnaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

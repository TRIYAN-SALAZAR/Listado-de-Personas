import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './Persona.model';
import { PersnaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public titulo = 'Listado Personas';
  public personas:Persona[] = [];

  /*
    ES: push()
    NO ES: push[]

    ENTIENDE POR DIOOOOOS!!!!!
  */

  constructor(private logginService: LogginService,private personaService: PersnaService){

  }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  personaAgregada(persona: Persona){
    this.personaService.agregarPersona(persona);
  }
}

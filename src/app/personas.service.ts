import { Persona } from "./Persona.model";
import { LogginService } from "./LogginService.service";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class PersnaService {

  public personas: Persona[] = 
  [
    new Persona('Jorge', 'Ozuna'),
    new Persona('Diego', 'Barajas'),
    new Persona('Saul', 'Serna')
  ];

  public saludar = new EventEmitter<number>();

  constructor(
    private logginService: LogginService
  ){}


  agregarPersona(persona: Persona){
    this.personas.push(persona);
    this.logginService.envioMensajeAConsola('Agregamos a la persona: ' + persona._nombre + ' ' + persona._apellido);
  }

  encontrarPersona(index:number):Persona {
    let persona:Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, modificarPersona:Persona){
    let persona = this.personas[index];
    persona._nombre = modificarPersona._nombre;
    persona._apellido = modificarPersona._apellido;
  }
}
import { Persona } from "./Persona.model";
import { LogginService } from "./LogginService.service";

export class PersnaService {

    public personas: Persona[] = 
    [
      new Persona('Jorge', 'Ozuna'),
      new Persona('Diego', 'Barajas'),
      new Persona('Saul', 'Serna')
    ];


    agregarPersona(persona: Persona){
        this.personas.push(persona);
    }
}
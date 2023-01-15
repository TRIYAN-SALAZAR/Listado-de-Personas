import { Component, Input } from '@angular/core';
import { Persona } from '../Persona.model';
import { PersnaService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  @Input() persona:Persona;
  @Input() indice:number;

  constructor(
    private PersnaService: PersnaService
  ){

  }

  emitirSaludo():void {
    this.PersnaService.saludar.emit(this.indice);
  }
}

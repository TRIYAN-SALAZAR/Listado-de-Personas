import { Component, ElementRef, ViewChild } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../Persona.model';
import { PersnaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreRef') nombre: ElementRef;
  @ViewChild('apellidoRef') apellido: ElementRef;

  //public nombreInput:string = '';
  //public apellidoInput:string = '';

  constructor(
    private LogginService:LogginService,
    private personaService: PersnaService
  ){}

  AgregarPersona(): void{
    let AggPersona = new Persona(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    );

    this.personaService.agregarPersona(AggPersona);
    
    //this.personaCreada.emit(AggPersona);
  }
}

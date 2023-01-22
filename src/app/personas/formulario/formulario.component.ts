import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginService.service';
import { Persona } from '../../Persona.model';
import { PersnaService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>();

  @ViewChild('nombreR') nombreR:ElementRef;
  @ViewChild('apellidoR') apellidoR:ElementRef;
  
  public nombre:string;
  public apellido:string;
  public index:number;

  constructor(
    private LogginService:LogginService,
    private personaService:PersnaService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.personaService.saludar.subscribe(
      (indice: number) => {
        ++indice
        alert("Hola desde el indice " + indice);
      }
    );
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona:Persona = this.personaService.encontrarPersona(this.index);
      this.nombre = persona._nombre;
      this.apellido = persona._apellido;
    }
  }

  onGuardarPersona():void {
    let AggPersona = new Persona(
      this.nombreR.nativeElement.value,
      this.apellidoR.nativeElement.value
    );

    //si la variablle index existe, estamos en el modo edicion
    if(this.index){
      console.log('Se modifico nombre de la persona ' + this.personaService.personas[this.index]._nombre + ' ' + this.personaService.personas[this.index]._apellido + ' a \n ' + this.nombreR.nativeElement.value + ' ' + this.apellidoR.nativeElement.value);
      this.personaService.modificarPersona(this.index, AggPersona);
    }else{
      console.log('queeee');
      this.personaService.agregarPersona(AggPersona);  
    }
    this.router.navigate(['']);
  }
}

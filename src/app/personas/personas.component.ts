import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../Persona.model';
import { PersnaService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PERSONASComponent {
  public personas:Persona[] = [];

  constructor(
    private personaService:PersnaService,
    private router:Router
  ){
    
  }

  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregar():void {
    this.router.navigate(['personas/agregar']);
  }
}

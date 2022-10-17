import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html'
})
export class NumerosComponent {

  constructor() { }

  ventasNetas: number = 27893782.4242;
  porcentaje: number = 0.48;

}

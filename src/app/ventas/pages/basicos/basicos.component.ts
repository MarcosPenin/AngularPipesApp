import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})

export class BasicosComponent {

  nombreLower: string = "marcos"
  nombreUpper: string = "MARCOS"
  nombreCompleto: string = "mARcos pEnin"

  fecha:Date=new Date();
}

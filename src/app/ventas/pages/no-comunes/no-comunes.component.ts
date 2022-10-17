import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = "Susana";
  genero: string = "femenino";

  invitacionMapa = {
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }


  //i18nPlural

  clientes: string[] = ["Maria", "Carlos", "Pedro", "Ana"]
  clientesMapa = {
    "=0": "no tenemos ningún cliente esperando",
    "=1": "tenemos un cliente esperando",
    "other": "tenemos # clientes esperando"
  }


  cambiarCliente() {
    this.nombre = "Fernando";
    this.genero = "masculino";

  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: "Otawa, Canada"
  }

//JsonPipe
heroes=[
  {
    nombre:"Superman",
    vuela:true
  },
  {
    nombre:"Batman",
    vuela:false
  },
  {
    nombre:"Aquaman",
    vuela:false
  }
]


//AsyncPipe

miObservable=interval(1000);

valorPromesa=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Tenemos data de promesa");
  },3500);
}

);

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent implements OnInit {
  nombre: string = 'Bertha';
  edad = 36
  mayordeEdad = true;
  variable!: null
  variable2: any
  pasatiempos = [
    "leer", "bailar", "editar", "programar"
  ]
  notas = [
    1,1,1
  ]
  frutas = [
    "fresas", " uvas", "mandarinas", "manzana"
  ]
  fruta = {
    nombre: 'manzana',
    sabor: 'acido dulce',
    color: ['rojo', 'amarilla', 'verde'],
    textura: 'suave y crujiente',
    peso: 15,
    caducada: false
  }
   notaFinal!: number

  constructor() {
    this.fruta = {
      nombre: 'banana',
      sabor: 'dulce',
      color: ['amarillas', 'verde'],
      textura: 'suave',
      peso: 10,
      caducada: true
    }
  }

  ngOnInit(): void {
    this.fruta = {
      nombre: 'aguacate',
      sabor: 'salado',
      color: ['verde'],
      textura: 'suave',
      peso: 300,
      caducada: false
    }
  }

  sicaducada(){
    if(this.fruta.caducada){
      return 'no vender'
    } else{
    return 'vender'
    }
  }

  sumanota(){
    this.notaFinal = 0
    for ( let sum of this.notas){
      this.notaFinal = this.notaFinal + sum
    }
    return this.notaFinal;
  }

}

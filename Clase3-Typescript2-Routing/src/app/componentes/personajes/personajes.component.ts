import { Component } from '@angular/core';
import {Personaje} from '../../common/personaje';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  SailorMoon!: Personaje;
  evolucionar: boolean;


  constructor() {
    this.evolucionar = false;
  }

  Evolucionar() {
    if (!this.evolucionar){
      this.evolucionar = true;
      this.SailorMoon = {
        id: 1,
        NombreReal: "Usagi Stukino",
        Edad: 16,
        NombreHeroe: "Princesa Serenity",
        CuerpoCeleste: "Luna",
        Poderes: [
          {
            nombre: "Transformación",
            ataque: 0,
            efectividad: 0
          },
          {
            nombre: "Poder de Cristal de Plata",
            ataque: 5000,
            efectividad: 5
          },
          {
            nombre: "Poder del Amor",
            ataque: 10000,
            efectividad: 5
          }
        ],
        Armas: [
          "Cristal de Plata"
        ],
        Colores: [
          {
            nombre: "Plata",
            valor: "#d2d2d2"
          },
          {
            nombre: "Blanco",
            valor: "#FFFFFF"
          }
        ],
        Tipo: "Reina de las Scout"
      }
    }
    else {
      this.evolucionar = false;
      this.SailorMoon = {
        id: 1,
        NombreReal: "Usagi Stukino",
        Edad: 16,
        NombreHeroe: "Sailor Moon",
        CuerpoCeleste: "Luna",
        Poderes: [
          {
            nombre: "Transformación",
            ataque: 0,
            efectividad: 0
          },
          {
            nombre: "Lanzamiento de Tiara",
            ataque: 1000,
            efectividad: 5
          },
          {
            nombre: "Poder del Amor",
            ataque: 5000,
            efectividad: 4
          }
        ],
        Armas: [
          "Tiara Lunar",
          "Cristal de Plata",
          "Moon Stick"
        ],
        Colores: [
          {
            nombre: "Azul",
            valor: "#0000FF"
          },
          {
            nombre: "Rojo",
            valor: "#FF0000"
          },
          {
            nombre: "Blanco",
            valor: "#FFFFFF"
          }
        ],
        Tipo: "Sailor Scout"
      }
    }
  }
}

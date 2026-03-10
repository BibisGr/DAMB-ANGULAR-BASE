export interface Personaje {
  id: number;
  NombreReal: string;
  Edad: number;
  NombreHeroe: string;
  CuerpoCeleste: string;
  Poderes: Poder[];
  Armas: string[];
  Colores: Color[];
  Tipo: string;
}

export interface Poder{
  nombre:string;
  ataque:number;
  efectividad:number;
}

export interface Color{
  nombre: string;
  valor: string;
}

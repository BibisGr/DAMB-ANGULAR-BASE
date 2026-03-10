import {Routes} from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {PersonajesComponent} from './componentes/personajes/personajes.component';
import {AboutUsComponent} from './componentes/about-us/about-us.component';
import {PagenotfoundComponent} from './componentes/pagenotfound/pagenotfound.component';
import {PersonajeComponent} from './componentes/personaje/personaje.component';

export const routes: Routes = [
  // Ruta Principal
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Rutas de Componentes
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'personaje',
    component: PersonajeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '404',
    component: PagenotfoundComponent
  },
  // Rutas de Retorno
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

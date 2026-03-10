import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menus: {name: string, url: string}[] = [
    {
      url: "/home",
      name: "Home",
    },
    {
      url: "/personajes",
      name: "Personajes",
    },
    {
      url: "/About",
      name: "About Us",
    },

  ];

}

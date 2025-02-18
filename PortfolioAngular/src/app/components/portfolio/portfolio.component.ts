import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: false,
})
export class PortfolioComponent implements OnInit {
  // Datos de ejemplo para las tarjetas
  projects = [
    {
      title: 'Aplicación Web',
      description: 'Aplicación de una rutina de gimnasio',
      image: '/Sololeveling.jpg'  // Ruta de la imagen para el proyecto 1
    },
    {
      title: 'DragonSlayer',
      description: 'Espada de Berserk Modelada en 3D',
        // Ruta de la imagen para el proyecto 2
    },
    {
      title: 'Hollow Knight',
      description: 'Protagonista de Hollow Knight Modelado en 3D',
      image: '/assets/project3.jpg'  // Ruta de la imagen para el proyecto 3
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

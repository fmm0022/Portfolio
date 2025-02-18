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
      image: 'https://drive.google.com/uc?export=view&id=1SZY-dq7STH4RomaAUm7UplpfiX0y6PJp',
      link: 'https://github.com/MedacDWES/proyecto-apis-rest-grupo_5'  // Imagen desde Google Drive
    },
    {
      title: 'DragonSlayer',
      description: 'Espada de Berserk Modelada en 3D',
      link: 'https://sketchfab.com/models/df7dee4c4e6a4f07b9e513b19631aec6',  // Enlace externo de Sketchfab
    },
    {
      title: 'Hollow Knight',
      description: 'Protagonista de Hollow Knight Modelado en 3D',
      link: 'https://sketchfab.com/models/175e91cd9f584f108fb79c85dccf2d25',  // Enlace externo de Sketchfab
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

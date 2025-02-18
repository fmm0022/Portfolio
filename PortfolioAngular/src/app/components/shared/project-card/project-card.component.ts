import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: false, // Indica que este componente se puede usar en un módulo standalone sin necesidad de un módulo principal
})
export class ProjectCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;  // Propiedad de imagen para la tarjeta
}

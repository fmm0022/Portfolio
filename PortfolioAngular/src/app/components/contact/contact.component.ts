import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // Variables para los campos del formulario
  name: string = '';
  email: string = '';
  message: string = '';

  // Método que maneja el envío del formulario
  onSubmit() {
    // Aquí, capturamos los valores directamente
    console.log('Formulario enviado');
    console.log('Nombre:', this.name);
    console.log('Correo:', this.email);
    console.log('Mensaje:', this.message);

    // Puedes realizar acciones adicionales aquí, como enviar los datos a un servidor
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  correo = '';
  password = '';

  iniciarSesion() {

    if(
      this.correo === 'admin@test.com' &&
      this.password === '123456'
    ){
      alert('Bienvenido');
    } else {
      alert('Usuario o contraseña incorrectos');
    }

  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';
  public resultado : number = 0;

  public alerta(){
    alert('Saludos ;)');
  }

  public calcularmasuno(){
    this.resultado = this.resultado +1;
  }

}

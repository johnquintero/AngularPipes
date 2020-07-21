import { Component } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      : string ='Capitan America';
  autor       : string = 'johN jaIro quiNTero';
  arreglo     : number[] = [1,2,3,4,5,6,7,8,9,0];
  PI          : number = Math.PI;
  porcentaje  : number = 0.234;
  salario     : number = 1234.5;
  idioma      : string = 'es';
  activo      : boolean = false;
  valorPromesa = new Promise<string>((resolve)=>{
      setTimeout(() => {
        resolve('LLego la data');
      }, 4500);
  });

  fecha : Date = new Date();

  heroe = {
    nombre : 'Logan',
    clave  : 'wolverine',
    edad   : 45,
    equipos : {
      inicial :'X-men',
      segundo : 'x-force'
    }
  }

  videoUrl : string = 'https://www.youtube.com/embed/Y-HIJFxM264';
}

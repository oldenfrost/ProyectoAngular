import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  titulo: string = 'Sobre El Modelo';


  title = 'portafolioNuevo2';
  mostrarSobreMi = false;
  mostrarInicio=true;
  mostrarProyecto = false;
  mostrarInfoSobreMi() {
    if (this.mostrarSobreMi) {
      this.titulo = 'Sobre El Modelo';
    

      this.mostrarInicio = true;
    } else {
      this.titulo = 'Inicio';


      this.mostrarProyecto = false;

      
      this.mostrarInicio = false;
    }
    this.mostrarSobreMi = !this.mostrarSobreMi;
  
  }
  mostrarInfoProyectos() {
    if (this.mostrarProyecto) {

    
    

      this.mostrarInicio = true;
    } else {

      this.titulo = 'Sobre Mi';
      this.mostrarSobreMi = false;


      
      this.mostrarInicio = false;
    }
    this.mostrarProyecto = !this.mostrarProyecto;


  }

  

 
}

import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  paisesFavoritos: Pais[] = []
  favori!: String

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (sessionStorage.getItem('usuario') != 'admin') {
      alert("No puede ver los datos porque no ha iniciado sesion")
    } else {
      this.paisesFavoritos = JSON.parse(localStorage.getItem('favoritos') || '{}');
      console.log(this.paisesFavoritos);
    }
  }

  volverBuscar() {
    this.router.navigate(['buscar'])
  }

  eliminarFavorito(pais: any) {
    this.paisesFavoritos = this.paisesFavoritos.filter(paislista => {
      return paislista.numericCode != pais.numericCode
    });
    console.log(this.paisesFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(this.paisesFavoritos));
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    this.router.navigate([''])
  }

}

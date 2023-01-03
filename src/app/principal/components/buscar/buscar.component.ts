import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  paises: Pais[] = []
  paisesFavoritos: Pais[] = []
  termino!: String

  constructor(private servicioServicio: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getPaises();
  }

  buscarPais(){
    if(this.termino != ""){
      this.servicioServicio.getPais(this.termino).subscribe(response => {
        this.paises = response
      });
    }else{
      this.getPaises();
    } 
    
  }

  getPaises(){
    this.servicioServicio.getEventos().subscribe(response => {
      this.paises = response
    });
    console.log(this.paises);
    
  }

  verFavoritos(){
    this.router.navigate(['favoritos'])
  }

  agregarFavorito(pais: any){
    console.log(pais);
    this.paisesFavoritos.push(pais)
    console.log(this.paisesFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(this.paisesFavoritos));
    this.paises = this.paises.filter(paislista => {
      return paislista.numericCode != pais.numericCode
    });
    console.log(this.paises);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: String = ""
  contrasenia: String = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion() {

    if (this.usuario == "admin" && this.contrasenia == "admin") {
      sessionStorage.setItem('usuario', 'admin')
      this.router.navigate(['buscar'])
    } else {
      alert("Contrasenia incorrecta");
    }

  }



}

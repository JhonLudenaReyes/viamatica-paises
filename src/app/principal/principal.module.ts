import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';


@NgModule({
  declarations: [
    MainComponent,
    BuscarComponent,
    FavoritosComponent
  ],
  exports: [
    MainComponent,
    BuscarComponent,
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PrincipalModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './principal/components/buscar/buscar.component';
import { FavoritosComponent } from './principal/components/favoritos/favoritos.component';
import { MainComponent } from './principal/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

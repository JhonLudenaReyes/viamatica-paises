import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Pais[]> {
    return this.http.get<Pais[]>("https://restcountries.com/v2/all");
  }

  getPais(termino: any): Observable<Pais[]> {
    return this.http.get<Pais[]>(`https://restcountries.com/v2/name/${termino}`);
  }
}

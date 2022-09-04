import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Country} from "../interfaces/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url);
      /*.pipe(
        catchError(err => of([]))
      )*/
  }

  buscarPaisPorCapital(termino :string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

}

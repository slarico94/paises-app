import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Country} from "../interfaces/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private readonly apiUrl: string = 'https://restcountries.com/v2';
  private fields: string[] = ['name', 'capital', 'alpha2Code', 'flags', 'population'];

  constructor(
    private http: HttpClient
  ) { }

  get httpParams(): HttpParams {
    return new HttpParams()
    .set('fields', this.fields.join(','))
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
      /*.pipe(
        catchError(err => of([]))
      )*/
  }

  buscarPaisPorCapital(termino :string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }


  buscarPorRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      );
  }

}

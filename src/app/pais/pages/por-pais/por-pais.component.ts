import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  private paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = true;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: (data) => {
          this.paises = data;
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
        }
      })
  }

  get paisesCopy() {
    return [...this.paises]
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.mostrarSugerencias= true;
    this.termino = termino;
    this.paisService.buscarPais( termino )
      .subscribe({
        next: (paises) => this.paisesSugeridos = paises.splice(0, 5),
        error: () => this.paisesSugeridos = []
      });
  }

  buscarSugerido(termino: string): void {
    this.buscar(termino);
  }

}

import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  private paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
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
    //TODO crear sugerencias
  }

}

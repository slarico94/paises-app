import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/pais";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

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
    this.paisService.buscarPaisPorCapital(this.termino)
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

}

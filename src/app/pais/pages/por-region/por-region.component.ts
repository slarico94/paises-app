import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {

    }
  `]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paisesCopy: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) return
    this.regionActiva = region;
    this.paisesCopy = []
    //TODO: hacer el llamado a servicios
    this.paisService.buscarPorRegion(this.regionActiva).subscribe(data => this.paisesCopy = data)
  }

}

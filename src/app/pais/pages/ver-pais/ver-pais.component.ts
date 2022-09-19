import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap, tap} from "rxjs";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    //FORMA LARGA NO RECOMENDADA
    /*this.activatedRoute.params.subscribe(({id}) => {
        this.paisService.getPaisPorCodigo(id)
          .subscribe((pais) => {
            console.log(pais)
        })
    })*/
    //RECOMENDADISIMA USAR SWITCHMAP
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      ).subscribe(pais => {
        this.pais = pais;
      })
  }

}

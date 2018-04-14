import { Component, OnInit } from '@angular/core';

import { Carro } from '../models/carro';

import { PeticionesService } from '../Services/peticiones.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
  providers: [PeticionesService]
})
export class CarrosComponent implements OnInit {

  carros: Carro[];
  currentCarro: Carro;
  httpCarros;

  constructor(private _peticionesService: PeticionesService) {

    this.currentCarro = new Carro('', '', '', 0, '');
    this.carros = [
      new Carro('Ford', 'Fusion', 'Ford Fusion', 2013, 'blanco'),
      new Carro('Nissan', 'Kicks', 'Nissan Kicks', 2017, 'negro'),
      new Carro('Chevrolet', 'Corsa', 'Corsa', 2013, 'blanco'),
    ];
  }

  ngOnInit() {
    // console.log(this._peticionesService.getPrueba());
    console.log('calling ws');
    // console.log(this._peticionesService.getCarros());
    this._peticionesService.getCarros().subscribe(
      result => {
        this.httpCarros = result.carros;
      },
      error => {
        let errMessage: any = <any>error;
        console.log(errMessage);
      }
    );

  }

  onSubmit () {
    this.carros.push(this.currentCarro);

    console.log(this.currentCarro);
    console.log(this.carros);

     this.currentCarro = new Carro('', '', '', 0, '');
  }

}

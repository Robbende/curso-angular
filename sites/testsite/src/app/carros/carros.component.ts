import { Component, OnInit } from '@angular/core';

import { Carro } from '../models/carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carros: Carro[];
  currentCarro: Carro;

  constructor() {
    this.currentCarro = new Carro('', '', '', 0, '');
    this.carros = [
      new Carro('Ford', 'Fusion', 'Ford Fusion', 2013, 'blanco'),
      new Carro('Nissan', 'Kicks', 'Nissan Kicks', 2017, 'negro'),
      new Carro('Chevrolet', 'Corsa', 'Corsa', 2013, 'blanco'),
    ];
  }

  ngOnInit() {
  }

  onSubmit () {
    this.carros.push(this.currentCarro);

    console.log(this.currentCarro);
    console.log(this.carros);

     this.currentCarro = new Carro('', '', '', 0, '');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import service
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;

  constructor(private router: Router, private _ropaserv: RopaService) {}

  ngOnInit() {
    this.listado_ropa = this._ropaserv.getRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda() {
    this._ropaserv.addRopa(this.prenda_a_guardar);
  }

  callRopaService() {
    console.log('calling ropa service...');
    console.log(this._ropaserv.getRopa());
  }
  redirect() {
    this.router.navigate(['/products']);
  }
}

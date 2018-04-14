import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService {

  public _url: string;

  constructor(private _http: Http) {
    this._url = 'http://localhost:5000/carros';
  }

  getPrueba() {
    return 'Testing Service';
  }

  getCarros() {
    return this._http.get(this._url).map(res => res.json());
  }

}

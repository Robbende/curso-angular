import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService {

  constructor() {

  }

  getPrueba() {
    return 'Testing Service';
  }

}
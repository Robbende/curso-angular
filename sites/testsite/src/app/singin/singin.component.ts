import { Component, OnInit } from '@angular/core';
import { SingIn } from '../models/singin';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  public singdata: SingIn;

  constructor() {
    this.singdata = new SingIn();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.singdata);
  }

}

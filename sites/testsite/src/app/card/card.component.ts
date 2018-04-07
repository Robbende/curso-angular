import { Component, OnInit } from '@angular/core';
import { CardObj } from './cardObj';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    public author: string;
    public cardList: Array<CardObj> = [];

    constructor(service: CardService) {
        this.author = 'Alejandro';
        let serv: CardService;
        serv = new CardService();
        this.cardList = serv.getCards();
    }

  ngOnInit() {
  }


}

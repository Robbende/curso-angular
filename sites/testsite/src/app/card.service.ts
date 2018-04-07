import { CardObj } from './card/cardObj';

export class CardService{

	getCards(){
		return [
  			new CardObj("Type of Scalability", "Vertical and Horizontal", 2, 1),
  			new CardObj("What is a microservices", "Isolated service", 2, 2),
  			new CardObj("Advantage of microservices architecture", "Scalability, Mantainance, Deploying, Multi Languages", 2, 3),
  			
  		];
	}
}
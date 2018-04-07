export class CardObj{

	public id:number;
	public question:string;
	public answer:string;
	public points:number;


	constructor(question, answer, points, id){

		this.question = question;
		this.answer = answer;
		this.points = points;
		this.id = id;
	}
}
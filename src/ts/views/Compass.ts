import { AbstractView } from "./AbstractView";

export class Compass extends AbstractView{

	init(){
		var _x:number = 0,
			_y:number = 0;

		this.lines = this.generateCircles([
			// sonne
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				timeStart: 0,
				animation: true,
				radiusStart: 0,
				radiusStop: 99,
				stepCount: 50
			},
		]);

		var _list:Array<any> = [
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 200 + _x, y: 110 + _y}, {x: 215 + _x, y: 185 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 215 + _x, y: 185 + _y}, {x: 290 + _x, y: 200 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 215 + _x, y: 215 + _y}, {x: 290 + _x, y: 200 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 215 + _x, y: 215 + _y}, {x: 200 + _x, y: 290 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 185 + _x, y: 215 + _y}, {x: 200 + _x, y: 290 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 185 + _x, y: 215 + _y}, {x: 110 + _x, y: 200 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 185 + _x, y: 185 + _y}, {x: 110 + _x, y: 200 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 200 + _x, y: 110 + _y}, {x: 185 + _x, y: 185 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			// kleine ecke links oben
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 171 + _y}, {x: 189 + _x, y: 171 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 171 + _y}, {x: 171 + _x, y: 189 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			// kleine ecke links unten
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 228 + _y}, {x: 189 + _x, y: 228 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 228 + _y}, {x: 171 + _x, y: 212 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			// kleine ecke rechts unten
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 229 + _x, y: 228 + _y}, {x: 212 + _x, y: 228 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 228 + _x, y: 228 + _y}, {x: 228 + _x, y: 212 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			// kleine ecke rechts oben
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 229 + _x, y: 171 + _y}, {x: 212 + _x, y: 171 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
			{
				start: [{x: 200 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				stop: [{x: 228 + _x, y: 171 + _y}, {x: 228 + _x, y: 189 + _y}],
				timeStart: 0,
				animation: true,
				stepCount: 50
			},
		];

		this.lines = this.lines.concat(this.generateLines(_list));
	}
}

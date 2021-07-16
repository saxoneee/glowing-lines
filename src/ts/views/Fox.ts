import { AbstractView } from "./AbstractView";

export class Fox extends AbstractView{

	init(){
		var _x:number = 0,
			_y:number = 0,
			_list:Array<any> = [
				// kopf
				{
					start: [{x: 70 + _x, y: 300 + _y}, {x: 70 + _x, y: 300 + _y}],
					stop: [{x: 70 + _x, y: 300 + _y}, {x: 140 + _x, y: 300 + _y}],
					timeStart: 1,
				},
				{
					start: [{x: 140 + _x, y: 300 + _y}, {x: 140 + _x, y: 300 + _y}],
					stop: [{x: 140 + _x, y: 300 + _y}, {x: 161 + _x, y: 321 + _y}],
					timeStart: 3,
				},
				{
					start: [{x: 70 + _x, y: 300 + _y}, {x: 70 + _x, y: 300 + _y}],
					stop: [{x: 70 + _x, y: 300 + _y}, {x: 50 + _x, y: 320 + _y}],
					timeStart: 1,
				},
				{
					start: [{x: 50 + _x, y: 320 + _y}, {x: 50 + _x, y: 320 + _y}],
					stop: [{x: 50 + _x, y: 320 + _y}, {x: 90 + _x, y: 360 + _y}],
					timeStart: 2,
				},
				{
					start: [{x: 160 + _x, y: 320 + _y}, {x: 160 + _x, y: 320 + _y}],
					stop: [{x: 160 + _x, y: 320 + _y}, {x: 120 + _x, y: 360 + _y}],
					timeStart: 3,
				},
				// nase
				{
					start: [{x: 95 + _x, y: 350 + _y}, {x: 95 + _x, y: 350 + _y}],
					stop: [{x: 95 + _x, y: 350 + _y}, {x: 115 + _x, y: 350 + _y}],
					timeStart: 4,
					stepCount:20
				},
				{
					start: [{x: 95 + _x, y: 350 + _y}, {x: 95 + _x, y: 350 + _y}],
					stop: [{x: 95 + _x, y: 350 + _y}, {x: 100 + _x, y: 355 + _y}],
					timeStart: 4,
					stepCount:10
				},
				{
					start: [{x: 115 + _x, y: 350 + _y}, {x: 115 + _x, y: 350 + _y}],
					stop: [{x: 115 + _x, y: 350 + _y}, {x: 110 + _x, y: 355 + _y}],
					timeStart: 4,
					stepCount:10
				},
				// ohr links
				{
					start: [{x: 45 + _x, y: 260 + _y}, {x: 45 + _x, y: 260 + _y}],
					stop: [{x: 45 + _x, y: 260 + _y}, {x: 75 + _x, y: 290 + _y}],
					timeStart: 0,
				},
				{
					start: [{x: 45 + _x, y: 260 + _y}, {x: 45 + _x, y: 260 + _y}],
					stop: [{x: 45 + _x, y: 260 + _y}, {x: 45 + _x, y: 310 + _y}],
					timeStart: 0,
				},
				// ohr rechts
				{
					start: [{x: 135 + _x, y: 290 + _y}, {x: 135 + _x, y: 290 + _y}],
					stop: [{x: 135 + _x, y: 290 + _y}, {x: 165 + _x, y: 260 + _y}],
					timeStart: 3,
				},
				{
					start: [{x: 165 + _x, y: 310 + _y}, {x: 165 + _x, y: 310 + _y}],
					stop: [{x: 165 + _x, y: 310 + _y}, {x: 165 + _x, y: 260 + _y}],
					timeStart: 4,
				},
				// körper
				{
					start: [{x: 140 + _x, y: 350 + _y}, {x: 140 + _x, y: 350 + _y}],
					stop: [{x: 140 + _x, y: 350 + _y}, {x: 150 + _x, y: 360 + _y}],
					timeStart: 4,
					stepCount:50
				},
				{
					start: [{x: 149 + _x, y: 359 + _y}, {x: 149 + _x, y: 359 + _y}],
					stop: [{x: 149 + _x, y: 359 + _y}, {x: 119 + _x, y: 389 + _y}],
					timeStart: 5,
					stepCount: 50
				},
				{
					start: [{x: 70 + _x, y: 350 + _y}, {x: 70 + _x, y: 350 + _y}],
					stop: [{x: 70 + _x, y: 350 + _y}, {x: 60 + _x, y: 360 + _y}],
					timeStart: 3,
					stepCount:50
				},
				{
					start: [{x: 60 + _x, y: 360 + _y}, {x: 60 + _x, y: 360 + _y}],
					stop: [{x: 60 + _x, y: 360 + _y}, {x: 90 + _x, y: 390 + _y}],
					timeStart: 4,
					stepCount:50
				},
		];

		this.lines = this.generateLines(_list);
	}
}

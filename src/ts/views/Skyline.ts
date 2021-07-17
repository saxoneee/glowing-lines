import { AbstractView } from "./AbstractView";

export class Skyline extends AbstractView{

	init(){
		var _x = -50,
			_y = 0;

		var _list:Array<any> = [
			// boden
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 125 + _x, y: 250 + _y}, {x: 325 + _x, y: 250 + _y}],
				timeStart: 1,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 145 + _x, y: 255 + _y}, {x: 285 + _x, y: 255 + _y}],
				timeStart: 1,
				animation: true
			},
			// berg 1
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 310 + _x, y: 245 + _y}, {x: 325 + _x, y: 230 + _y}],
				timeStart: 3,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 325 + _x, y: 230 + _y}, {x: 340 + _x, y: 245 + _y}],
				timeStart: 3,
				animation: true
			},
			// berg 2
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 335 + _x, y: 230 + _y}, {x: 350 + _x, y: 215 + _y}],
				timeStart: 3,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 350 + _x, y: 215 + _y}, {x: 380 + _x, y: 245 + _y}],
				timeStart: 3,
				animation: true
			},
			// sonne
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 151 + _x, y: 120 + _y}, {x: 154 + _x, y: 120 + _y}],
				timeStart: 0,
				animation: true
			},

			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 143 + _x, y: 124 + _y}, {x: 162 + _x, y: 124 + _y}],
				timeStart: 0,
				animation: true
			},

			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 138 + _x, y: 128 + _y}, {x: 167 + _x, y: 128 + _y}],
				timeStart: 0,
				animation: true
			},

			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 137 + _x, y: 132 + _y}, {x: 168 + _x, y: 132 + _y}],
				timeStart: 0,
				animation: true
			},

			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 138 + _x, y: 136 + _y}, {x: 167 + _x, y: 136 + _y}],
				timeStart: 0,
				animation: true
			},

			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 143 + _x, y: 140 + _y}, {x: 162 + _x, y: 140 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 151 + _x, y: 144 + _y}, {x: 154 + _x, y: 144 + _y}],
				timeStart: 0,
				animation: true
			},
			// haus 1
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 151 + _x, y: 245 + _y}, {x: 151 + _x, y: 235 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 151 + _x, y: 235 + _y}, {x: 161 + _x, y: 225 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 161 + _x, y: 225 + _y}, {x: 168 + _x, y: 225 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 2
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 245 + _y}, {x: 171 + _x, y: 238 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 171 + _x, y: 238 + _y}, {x: 190 + _x, y: 238 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 3
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 194 + _x, y: 245 + _y}, {x: 194 + _x, y: 200 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 194 + _x, y: 200 + _y}, {x: 200 + _x, y: 200 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 4
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 204 + _x, y: 245 + _y}, {x: 204 + _x, y: 210 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 204 + _x, y: 210 + _y}, {x: 215 + _x, y: 210 + _y}],
				timeStart: 2,
				animation: true
			},
			// turm
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 220 + _x, y: 245 + _y}, {x: 225 + _x, y: 200 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 235 + _x, y: 245 + _y}, {x: 230 + _x, y: 215 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 222 + _x, y: 190 + _y}, {x: 230 + _x, y: 190 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 222 + _x, y: 200 + _y}, {x: 222 + _x, y: 190 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 226 + _x, y: 190 + _y}, {x: 226 + _x, y: 185 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 5
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 240 + _x, y: 245 + _y}, {x: 240 + _x, y: 210 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 240 + _x, y: 210 + _y}, {x: 270 + _x, y: 210 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 6
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 250 + _x, y: 235 + _y}, {x: 270 + _x, y: 225 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 255 + _x, y: 245 + _y}, {x: 255 + _x, y: 233 + _y}],
				timeStart: 2,
				animation: true
			},
			// haus 7
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 280 + _x, y: 245 + _y}, {x: 280 + _x, y: 235 + _y}],
				timeStart: 2,
				animation: true
			},
			{
				start: [{x:200 + _x, y: 200 + _y}, {x:200 + _x, y: 200 + _y}],
				stop: [{x: 280 + _x, y: 235 + _y}, {x: 300 + _x, y: 235 + _y}],
				timeStart: 2,
				animation: true
			},
		];

		for(var _i = 0; _i < _list.length; _i++){
			var _item = _list[_i];
			var _rand1 = Math.floor(Math.random() * 300);
			var _rand2 = Math.floor(Math.random() * 300);

			// console.log(_rand);
			_item.start[0].x = _rand1;
			_item.start[0].y = _rand2;
			_item.start[1].x = _rand1;
			_item.start[1].y = _rand2;
		}

		this.lines = this.generateLines(_list);
	}
}

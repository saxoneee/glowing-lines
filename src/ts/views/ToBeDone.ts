import { AbstractView } from "./AbstractView";

export class ToBeDone extends AbstractView{

	init(){
		var _x = -5,
			_y = 20,
			_xgl = _x + 20;
		var _xgr = _xgl + 80;

		var _list:Array<any> = [
			// T
			{
				start: [{x: 125 + _xgl, y: 50 + _y}, {x: 110 + _xgl, y: 50 + _y}],
				stop: [{x: 125 + _xgl, y: 50 + _y}, {x: 110 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 117 + _xgl, y: 50 + _y}, {x: 117 + _xgl, y: 70 + _y}],
				stop: [{x: 117 + _xgl, y: 50 + _y}, {x: 117 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// O
			{
				start: [{x: 130 + _xgl, y: 50 + _y}, {x: 130 + _xgl, y: 70 + _y}],
				stop: [{x: 130 + _xgl, y: 50 + _y}, {x: 130 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 130 + _xgl, y: 50 + _y}, {x: 145 + _xgl, y: 50 + _y}],
				stop: [{x: 130 + _xgl, y: 50 + _y}, {x: 145 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 130 + _xgl, y: 70 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				stop: [{x: 130 + _xgl, y: 70 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 130 + _xgl, y: 70 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				stop: [{x: 130 + _xgl, y: 70 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 145 + _xgl, y: 50 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				stop: [{x: 145 + _xgl, y: 50 + _y}, {x: 145 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// B
			{
				start: [{x: 160 + _xgl, y: 50 + _y}, {x: 160 + _xgl, y: 70 + _y}],
				stop: [{x: 160 + _xgl, y: 50 + _y}, {x: 160 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 160 + _xgl, y: 50 + _y}, {x: 170 + _xgl, y: 50 + _y}],
				stop: [{x: 160 + _xgl, y: 50 + _y}, {x: 170 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 160 + _xgl, y: 60 + _y}, {x: 175 + _xgl, y: 60 + _y}],
				stop: [{x: 160 + _xgl, y: 60 + _y}, {x: 175 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 160 + _xgl, y: 70 + _y}, {x: 175 + _xgl, y: 70 + _y}],
				stop: [{x: 160 + _xgl, y: 70 + _y}, {x: 175 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 170 + _xgl, y: 50 + _y}, {x: 170 + _xgl, y: 60 + _y}],
				stop: [{x: 170 + _xgl, y: 50 + _y}, {x: 170 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 175 + _xgl, y: 60 + _y}, {x: 175 + _xgl, y: 70 + _y}],
				stop: [{x: 175 + _xgl, y: 60 + _y}, {x: 175 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// E
			{
				start: [{x: 180 + _xgl, y: 50 + _y}, {x: 180 + _xgl, y: 70 + _y}],
				stop: [{x: 180 + _xgl, y: 50 + _y}, {x: 180 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 180 + _xgl, y: 50 + _y}, {x: 195 + _xgl, y: 50 + _y}],
				stop: [{x: 180 + _xgl, y: 50 + _y}, {x: 195 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 180 + _xgl, y: 60 + _y}, {x: 190 + _xgl, y: 60 + _y}],
				stop: [{x: 180 + _xgl, y: 60 + _y}, {x: 190 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 180 + _xgl, y: 70 + _y}, {x: 195 + _xgl, y: 70 + _y}],
				stop: [{x: 180 + _xgl, y: 70 + _y}, {x: 195 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// D
			{
				start: [{x: 209 + _xgl, y: 50 + _y}, {x: 209 + _xgl, y: 70 + _y}],
				stop: [{x: 209 + _xgl, y: 50 + _y}, {x: 209 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 209 + _xgl, y: 50 + _y}, {x: 219 + _xgl, y: 50 + _y}],
				stop: [{x: 209 + _xgl, y: 50 + _y}, {x: 219 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 219 + _xgl, y: 50 + _y}, {x: 219 + _xgl, y: 60 + _y}],
				stop: [{x: 219 + _xgl, y: 50 + _y}, {x: 219 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 219 + _xgl, y: 60 + _y}, {x: 224 + _xgl, y: 60 + _y}],
				stop: [{x: 219 + _xgl, y: 60 + _y}, {x: 224 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 224 + _xgl, y: 60 + _y}, {x: 224 + _xgl, y: 70 + _y}],
				stop: [{x: 224 + _xgl, y: 60 + _y}, {x: 224 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 209 + _xgl, y: 70 + _y}, {x: 224 + _xgl, y: 70 + _y}],
				stop: [{x: 209 + _xgl, y: 70 + _y}, {x: 224 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// O
			{
				start: [{x: 229 + _xgl, y: 50 + _y}, {x: 229 + _xgl, y: 70 + _y}],
				stop: [{x: 229 + _xgl, y: 50 + _y}, {x: 229 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 229 + _xgl, y: 50 + _y}, {x: 244 + _xgl, y: 50 + _y}],
				stop: [{x: 229 + _xgl, y: 50 + _y}, {x: 244 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 229 + _xgl, y: 70 + _y}, {x: 244 + _xgl, y: 70 + _y}],
				stop: [{x: 229 + _xgl, y: 70 + _y}, {x: 244 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 244 + _xgl, y: 50 + _y}, {x: 244 + _xgl, y: 70 + _y}],
				stop: [{x: 244 + _xgl, y: 50 + _y}, {x: 244 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// N
			{
				start: [{x: 249 + _xgl, y: 50 + _y}, {x: 249 + _xgl, y: 70 + _y}],
				stop: [{x: 249 + _xgl, y: 50 + _y}, {x: 249 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 249 + _xgl, y: 50 + _y}, {x: 259 + _xgl, y: 50 + _y}],
				stop: [{x: 249 + _xgl, y: 50 + _y}, {x: 259 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 259 + _xgl, y: 50 + _y}, {x: 259 + _xgl, y: 60 + _y}],
				stop: [{x: 259 + _xgl, y: 50 + _y}, {x: 259 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 259 + _xgl, y: 60 + _y}, {x: 264 + _xgl, y: 60 + _y}],
				stop: [{x: 259 + _xgl, y: 60 + _y}, {x: 264 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 264 + _xgl, y: 50 + _y}, {x: 264 + _xgl, y: 70 + _y}],
				stop: [{x: 264 + _xgl, y: 50 + _y}, {x: 264 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			// E
			{
				start: [{x: 269 + _xgl, y: 50 + _y}, {x: 269 + _xgl, y: 70 + _y}],
				stop: [{x: 269 + _xgl, y: 50 + _y}, {x: 269 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 269 + _xgl, y: 50 + _y}, {x: 284 + _xgl, y: 50 + _y}],
				stop: [{x: 269 + _xgl, y: 50 + _y}, {x: 284 + _xgl, y: 50 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 269 + _xgl, y: 60 + _y}, {x: 279 + _xgl, y: 60 + _y}],
				stop: [{x: 269 + _xgl, y: 60 + _y}, {x: 279 + _xgl, y: 60 + _y}],
				timeStart: 0,
				animation: true
			},
			{
				start: [{x: 269 + _xgl, y: 70 + _y}, {x: 284 + _xgl, y: 70 + _y}],
				stop: [{x: 269 + _xgl, y: 70 + _y}, {x: 284 + _xgl, y: 70 + _y}],
				timeStart: 0,
				animation: true
			},

		];

		this.lines = this.generateLines(_list);
	}
}

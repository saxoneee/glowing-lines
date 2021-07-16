import { AbstractView } from "./AbstractView";

export class Deer extends AbstractView{

	init(){
		var _x = -95,
			_y = -10,
			_xgl = _x + 20;
		var _xgr = _xgl + 80;

		var _list:Array<any> = [
			// geweih links
			{
				start: [{x: 125 + _xgl, y: 50 + _y}, {x: 125 + _xgl, y: 50 + _y}],
				stop: [{x: 125 + _xgl, y: 50 + _y}, {x: 110 + _xgl, y: 20 + _y}],
				timeStart: 4,
			},
			{
				start: [{x: 110 + _xgl, y: 80 + _y}, {x: 110 + _xgl, y: 80 + _y}],
				stop: [{x: 110 + _xgl, y: 80 + _y}, {x: 140 + _xgl, y: 20 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 120 + _xgl, y: 100 + _y}, {x: 120 + _xgl, y: 100 + _y}],
				stop: [{x: 120 + _xgl, y: 100 + _y}, {x: 80 + _xgl, y: 80 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 130 + _xgl, y: 120 + _y}, {x: 130 + _xgl, y: 120 + _y}],
				stop: [{x: 130 + _xgl, y: 120 + _y}, {x: 140 + _xgl, y: 100 + _y}],
				timeStart: 2,
			},
			{
				start: [{x: 135 + _xgl, y: 130 + _y}, {x: 135 + _xgl, y: 130 + _y}],
				stop: [{x: 135 + _xgl, y: 130 + _y}, {x: 100 + _xgl, y: 60 + _y}],
				timeStart: 1,
			},
			// geweih rechts
			{
				start: [{x: 155 + _xgr, y: 50 + _y}, {x: 155 + _xgr, y: 50 + _y}],
				stop: [{x: 155 + _xgr, y: 50 + _y}, {x: 170 + _xgr, y: 20 + _y}],
				timeStart: 4,
			},
			{
				start: [{x: 170 + _xgr, y: 80 + _y}, {x: 170 + _xgr, y: 80 + _y}],
				stop: [{x: 170 + _xgr, y: 80 + _y}, {x: 140 + _xgr, y: 20 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 160 + _xgr, y: 100 + _y}, {x: 160 + _xgr, y: 100 + _y}],
				stop: [{x: 160 + _xgr, y: 100 + _y}, {x: 200 + _xgr, y: 80 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 150 + _xgr, y: 120 + _y}, {x: 150 + _xgr, y: 120 + _y}],
				stop: [{x: 150 + _xgr, y: 120 + _y}, {x: 140 + _xgr, y: 100 + _y}],
				timeStart: 2,
			},
			{
				start: [{x: 145 + _xgr, y: 130 + _y}, {x: 145 + _xgr, y: 130 + _y}],
				stop: [{x: 145 + _xgr, y: 130 + _y}, {x: 180 + _xgr, y: 60 + _y}],
				timeStart: 1,
			},
			// kopf
			{
				start: [{x: 180 + _x, y: 140 + _y}, {x: 180 + _x, y: 140 + _y}],
				stop: [{x: 180 + _x, y: 140 + _y}, {x: 150 + _x, y: 200 + _y}],
				timeStart: 0,
			},
			{
				start: [{x: 150 + _x, y: 200 + _y}, {x: 150 + _x, y: 200 + _y}],
				stop: [{x: 150 + _x, y: 200 + _y}, {x: 180 + _x, y: 230 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 251 + _x, y: 199 + _y}, {x: 251 + _x, y: 199 + _y}],
				stop: [{x: 251 + _x, y: 199 + _y}, {x: 220 + _x, y: 230 + _y}],
				timeStart: 3,
			},
			{
				start: [{x: 220 + _x, y: 140 + _y}, {x: 220 + _x, y: 140 + _y}],
				stop: [{x: 220 + _x, y: 140 + _y}, {x: 250 + _x, y: 200 + _y}],
				timeStart: 0,
			},
			// sonnenbrille links
			{
				start: [{x: 170 + _x, y: 140 + _y}, {x: 170 + _x, y: 140 + _y}],
				stop: [{x: 170 + _x, y: 140 + _y}, {x: 120 + _x, y: 140 + _y}],
				timeStart: 0,
			},
			{
				start: [{x: 120 + _x, y: 140 + _y}, {x: 120 + _x, y: 140 + _y}],
				stop: [{x: 120 + _x, y: 140 + _y}, {x: 160 + _x, y: 160 + _y}],
				timeStart: 2,
			},
			// sonnenbrille rechts
			{
				start: [{x: 230 + _x, y: 140 + _y}, {x: 230 + _x, y: 140 + _y}],
				stop: [{x: 230 + _x, y: 140 + _y}, {x: 280 + _x, y: 140 + _y}],
				timeStart: 0,
			},
			{
				start: [{x: 280 + _x, y: 140 + _y}, {x: 280 + _x, y: 140 + _y}],
				stop: [{x: 280 + _x, y: 140 + _y}, {x: 240 + _x, y: 160 + _y}],
				timeStart: 2,
			},
			// nase
			{
				start: [{x: 199 + _x, y: 200 + _y}, {x: 199 + _x, y: 200 + _y}],
				stop: [{x: 199 + _x, y: 200 + _y}, {x: 240 + _x, y: 200 + _y}],
				timeStart: 4,
			},
			{
				start: [{x: 201 + _x, y: 200 + _y}, {x: 201 + _x, y: 200 + _y}],
				stop: [{x: 201 + _x, y: 200 + _y}, {x: 160 + _x, y: 200 + _y}],
				timeStart: 4,
			},
		];

		this.lines = this.generateLines(_list);
	}
}

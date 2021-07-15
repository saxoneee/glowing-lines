import * as PIXI from 'pixi.js';


import Line from './../comp/line';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	lineList:Array<any> = [];

	last:any = {
		x: 0,
		y: 0
	};

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;
		// this.initEvents();

		this.initList();
		// this.lineList = [
		// 	new Line({x: 100, y: 500}, {x: 440, y: 400}, this.container),
		// 	new Line({x: 200, y: 500}, {x: 440, y: 400}, this.container),
		// ];

		return this.container;
	}


	tick(delta: number){
		this.tickCounter++;

		if(this.tickCounter%2 == 0){
			for(let _index in this.lineList){
				var _line = this.lineList[_index];

				_line.draw();
			}
		}

		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}

	initList(){
		var _x = 40,
			_y = 100,
			_xgl = _x + 20;
		var _xgr = _xgl + 80;

		var _list:Array<any> = [
			// geweih links
			{
				start: {x: 140 + _xgl, y: 20 + _y},
				stop: {x: 110 + _xgl, y: 80 + _y}
			},
			{
				start: {x: 125 + _xgl, y: 50 + _y},
				stop: {x: 110 + _xgl, y: 20 + _y}
			},
			{
				start: {x: 80 + _xgl, y: 80 + _y},
				stop: {x: 120 + _xgl, y: 100 + _y}
			},
			{
				start: {x: 140 + _xgl, y: 100 + _y},
				stop: {x: 130 + _xgl, y: 120 + _y}
			},
			{
				start: {x: 100 + _xgl, y: 60 + _y},
				stop: {x: 135 + _xgl, y: 130 + _y}
			},
			// geweih rechts
			{
				start: {x: 140 + _xgr, y: 20 + _y},
				stop: {x: 170 + _xgr, y: 80 + _y}
			},
			{
				start: {x: 155 + _xgr, y: 50 + _y},
				stop: {x: 170 + _xgr, y: 20 + _y}
			},
			{
				start: {x: 200 + _xgr, y: 80 + _y},
				stop: {x: 160 + _xgr, y: 100 + _y}
			},
			{
				start: {x: 140 + _xgr, y: 100 + _y},
				stop: {x: 150 + _xgr, y: 120 + _y}
			},
			{
				start: {x: 180 + _xgr, y: 60 + _y},
				stop: {x: 145 + _xgr, y: 130 + _y}
			},
			// kopf
			{
				start: {x: 180 + _x, y: 140 + _y},
				stop: {x: 150 + _x, y: 200 + _y}
			},
			{
				start: {x: 150 + _x, y: 200 + _y},
				stop: {x: 180 + _x, y: 230 + _y}
			},
			{
				start: {x: 180 + _x, y: 230 + _y},
				stop: {x: 220 + _x, y: 230 + _y},
			},
			{
				start: {x: 220 + _x, y: 230 + _y},
				stop: {x: 250 + _x, y: 200 + _y},
			},
			{
				start: {x: 250 + _x, y: 200 + _y},
				stop: {x: 220 + _x, y: 140 + _y},
			},
			// sonnenbrille links
			{
				start: {x: 120 + _x, y: 140 + _y},
				stop: {x: 170 + _x, y: 140 + _y},
			},
			{
				start: {x: 120 + _x, y: 140 + _y},
				stop: {x: 160 + _x, y: 160 + _y},
			},
			// sonnenbrille rechts
			{
				start: {x: 230 + _x, y: 140 + _y},
				stop: {x: 280 + _x, y: 140 + _y},
			},
			{
				start: {x: 280 + _x, y: 140 + _y},
				stop: {x: 240 + _x, y: 160 + _y},
			},
			// nase
			{
				start: {x: 160 + _x, y: 200 + _y},
				stop: {x: 240 + _x, y: 200 + _y},
			},
		];

		for(var _i = 0; _i < _list.length; _i++){
			this.lineList.push(new Line(_list[_i].start, _list[_i].stop, this.container));
		}
	}
}

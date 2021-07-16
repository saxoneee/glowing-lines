import * as PIXI from 'pixi.js';
import { Deer } from '../views/deer';
import { Fox } from '../views/fox';


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

		this.start();

		return this.container;
	}

	start(){
		var _list:Array<any> = [];

		var _deer = new Deer(this.container),
			_fox = new Fox(this.container);

		_list = _list.concat(_deer.getLines());
		_list = _list.concat(_fox.getLines());

		for(var _i = 0; _i < _list.length; _i++){
			this.lineList.push(_list[_i]);
		}
	}

	tick(delta: number){
		this.tickCounter++;

		if(this.tickCounter%1 == 0){
			for(let _index in this.lineList){
				var _line = this.lineList[_index];

				_line.draw();
			}
		}

		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}

		for(var _i = 0; _i < this.lineList.length; _i++){
			this.lineList[_i].tick(delta);
		}
	}

}

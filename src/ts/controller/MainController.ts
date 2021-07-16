import * as PIXI from 'pixi.js';
import { Deer } from '../views/deer';
import { Fox } from '../views/fox';


import Line from './../comp/line';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	objectList:Array<any> = [];

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
		var _deer = new Deer(this.container),
			_fox = new Fox(this.container);

		this.objectList.push(_deer);
		this.objectList.push(_fox);
	}

	tick(delta: number){
		this.tickCounter++;

		for(var _i = 0; _i < this.objectList.length; _i++){
			this.objectList[_i].tick(delta);
		}

		if(this.tickCounter%1 == 0){
			for(let _index in this.objectList){
				var _objectLines = this.objectList[_index].getLines();
				// console.log(_objectLines);
				for(var _o = 0; _o < _objectLines.length; _o++){
					_objectLines[_o].draw();
				}

			}
		}

		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}

}

import * as PIXI from 'pixi.js';
import { AbstractView } from '../views/AbstractView';
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
		var _me = this,
			_optionsElList = document.querySelectorAll('input[name=sketch]');

		for(var _i = 0; _i < _optionsElList.length; _i++){
			var _radio:HTMLInputElement = _optionsElList[_i] as HTMLInputElement;
			_radio.addEventListener('change', function(){
				_me.addViewsByOptions();
			});
		}

		_me.addViewsByOptions();

	}

	addViewsByOptions(){
		var _me = this,
			_optionsElList = document.querySelectorAll('input[name=sketch]');

		for(var _i = 0; _i < _optionsElList.length; _i++){
			var _radio:HTMLInputElement = _optionsElList[_i] as HTMLInputElement;

			if(_radio.checked){
				console.log('add', _radio.value);
				this.addView(_radio.value);
			}else{
				this.removeView(_radio.value);
			}
		}
	}

	addView(pName:string){
		var _object:AbstractView = null;

		switch(pName){
			case 'deer':
				_object = new Deer(this.container);
			break;
			case 'fox':
				_object = new Fox(this.container);
			break;
			case 'skyline': break;
			default:
				console.error('wat?');
		}

		if(_object){
			this.objectList.push(_object);
		}
	}

	removeView(pName:string){
		console.log('remo', pName);
		var _indexToRemove = -1,
			_objectNames = ['deer', 'fox', 'skyline'];
		for(var _i = 0; _i < this.objectList.length; _i++){
			var _o = this.objectList[_i];

			// if(_objectNames.indexOf((_o.constructor.name + '').toLowerCase()) !== -1){
			if((_o.constructor.name + '').toLowerCase() === pName){
				_o.destroy();
				_indexToRemove = _i;
				break;
			}
		}

		if(_indexToRemove !== -1){
			this.objectList.splice(_indexToRemove, 1);
		}
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
				// console.log(this.objectList[_index].constructor.name);
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

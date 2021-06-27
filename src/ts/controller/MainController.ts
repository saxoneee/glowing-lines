import * as PIXI from 'pixi.js';
import {GlowFilter} from '@pixi/filter-glow';

import Line from './../comp/line';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	currentLine:Line = null;

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;
		this.initEvents();

		if(false){
			var _line = new Line();

			_line.coords.push({x: 10, y: 20});
			_line.coords.push({x: 200, y: 100});
			_line.coords.push({x: 50, y: 100});
			_line.coords.push({x: 150, y: 20});

			this.currentLine = _line;
			this.draw();
			this.currentLine = null;
		}

		return this.container;
	}

	/**
	 *
	 * @returns
	 */
	draw(){
		if(!this.currentLine){
			return;
		}

		var _line = this.currentLine;

		if(!_line.sprite){
			console.log('no line');
			_line.sprite = new PIXI.Graphics();

			this.container.addChild(_line.sprite);

			_line.sprite.beginFill(0xffffff);
			_line.sprite.lineStyle(1, 0xffffff);

			var glowfilter = new GlowFilter({
				distance:20,
				quality:1,
				outerStrength: 8,
				innerStrength: 1,
				color: 0xffff0f
			})

			_line.sprite.filters = [glowfilter];
		}


		// line.lineStyle(0.5, 0xffffff);
		for(var _i = 0; _i < _line.coords.length; _i++){
			var _coords = _line.coords[_i];

			if(_i === 0){
				_line.sprite.moveTo(_coords.x, _coords.y)
			}
			// console.log(_coords);
// debugger;
			_line.sprite.lineTo(_coords.x, _coords.y);
		}
		for(var _y = _line.coords.length - 1; _y >= 0; _y--){
			var _coords = _line.coords[_y];

			_line.sprite.lineTo(_coords.x, _coords.y);
		}
	}



	initEvents(){
		// vanilla js is sufficient for now
		var _me = this,
			_canvas = document.getElementsByTagName('canvas')[0],
			_isDown = false;

		_canvas.addEventListener('mousedown', function(pEvent){
			console.log('down');
			_isDown = true;

			_me.currentLine = new Line();

			const _canvasBoundingClientRect = _canvas.getBoundingClientRect(), // to get the position relative to viewport
			_canvasPosX = _canvasBoundingClientRect.left,
			_canvasPosY = _canvasBoundingClientRect.top;

			_me.currentLine.coords.push({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY});
		});

		_canvas.addEventListener('mousemove', function(pEvent){
			if(_isDown && _me.tickCounter % 2 === 0){
				console.log('move');

				const _canvasBoundingClientRect = _canvas.getBoundingClientRect(), // to get the position relative to viewport
				_canvasPosX = _canvasBoundingClientRect.left,
				_canvasPosY = _canvasBoundingClientRect.top;


				// console.log({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY});

				_me.currentLine.coords.push({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY});
			}
		});

		document.body.addEventListener('mouseup', function(){
			console.log('up');
			_isDown = false;

			console.log(_me.currentLine);

			_me.currentLine = null;
		});
	}

	tick(delta: number){
		this.tickCounter++;

		// if(this.tickCounter % 15){
		// if(this.tickCounter % 60){
		// }
		this.draw();


		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}


}

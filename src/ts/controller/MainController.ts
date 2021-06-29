import * as PIXI from 'pixi.js';
import {GlowFilter} from '@pixi/filter-glow';

import Line from './../comp/line';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	currentLine:Line = null;

	last:any = {
		x: 0,
		y: 0
	};

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;
		this.initEvents();

		return this.container;
	}

	/**
	 *
	 * @returns
	 */
	draw(pCoords:any, pMoveTo:Boolean){
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

		if(pMoveTo){
			_line.sprite.moveTo(pCoords.x + 0.5, pCoords.y + 0.5);

		}else{
			_line.sprite.moveTo(this.last.x + 0.5, this.last.y + 0.5);
			_line.sprite.lineTo(pCoords.x + 0.5, pCoords.y + 0.5);
		}

		this.last = {
			x :pCoords.x,
			y: pCoords.y
		}
	}



	initEvents(){
		// for events, vanilla js is sufficient for now
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

			_me.draw({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY}, true);
		});

		_canvas.addEventListener('mousemove', function(pEvent){
			if(_isDown){
				console.log('move');

				const _canvasBoundingClientRect = _canvas.getBoundingClientRect(), // to get the position relative to viewport
				_canvasPosX = _canvasBoundingClientRect.left,
				_canvasPosY = _canvasBoundingClientRect.top;

				_me.draw({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY}, false);
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

		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}


}

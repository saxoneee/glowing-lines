import * as PIXI from 'pixi.js';

import {GlowFilter} from '@pixi/filter-glow';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	lineColl:Array<any> = [];

	init(pWidth:number, pHeight:number){
		this.lineColl.push({x: 10, y: 20});
		this.lineColl.push({x: 200, y: 100});
		this.lineColl.push({x: 50, y: 100});
		this.lineColl.push({x: 150, y: 20});

		this.container = new PIXI.Container;
		this.initEvents();

		return this.container;
	}

	/**
	 *
	 * @returns
	 */
	draw(){
		if(this.lineColl.length === 0){
			return;
		}

		var line = new PIXI.Graphics();

		line.beginFill(0xffffff);
		// line.lineStyle(0.5, 0xffffff);
		line.lineStyle(1, 0xffffff);

		while(this.lineColl.length > 0){
			var _coords = this.getNextLineCoords();
console.log(_coords);
			line.moveTo(_coords[0].x, _coords[0].y);
			line.lineTo(_coords[1].x, _coords[1].y);
			line.endFill();
		}

		this.container.addChild(line);

		var glowfilter = new GlowFilter({
			distance:20,
			quality:1,
			outerStrength: 8,
			innerStrength: 1,
			color: 0xffff0f
		})

		line.filters = [glowfilter];
	}

	getNextLineCoords(){
		var _start = this.lineColl[0];
		this.lineColl.splice(0,1);
		var _stop = this.lineColl[0];
		if(!_stop){
			_stop = JSON.parse(JSON.stringify(_start));
			_stop.x ++;
		}

		return [_start, _stop];
	}

	initEvents(){
		// vanilla js is sufficient for now
		var _me = this,
			_canvas = document.getElementsByTagName('canvas')[0],
			_isDown = false;

		_canvas.addEventListener('mousedown', function(pEvent){
			console.log('down');
			_isDown = true;

			const _canvasBoundingClientRect = _canvas.getBoundingClientRect(), // to get the position relative to viewport
			_canvasPosX = _canvasBoundingClientRect.left,
			_canvasPosY = _canvasBoundingClientRect.top;

			_me.lineColl.push({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY});
		});

		_canvas.addEventListener('mousemove', function(pEvent){
			if(_isDown){
				console.log('move');

				const _canvasBoundingClientRect = _canvas.getBoundingClientRect(), // to get the position relative to viewport
				_canvasPosX = _canvasBoundingClientRect.left,
				_canvasPosY = _canvasBoundingClientRect.top;

				_me.lineColl.push({x: pEvent.clientX - _canvasPosX, y: pEvent.clientY - _canvasPosY});
			}
		});

		document.body.addEventListener('mouseup', function(){
			console.log('up');
			_isDown = false;
		});
	}

	tick(delta: number){
		this.tickCounter++;

		if(this.tickCounter % 15){
			this.draw();
		}


		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}


}

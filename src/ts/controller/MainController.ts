import * as PIXI from 'pixi.js';
import {GlowFilter} from '@pixi/filter-glow';

import Line from './../comp/line';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	currentLine:Line = null;

	_animationColl:Array<any> = [];
	_currentAnmiation:any = null;
	_currentAnmiationQueue:any = null;

	last:any = {
		x: 0,
		y: 0
	};

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;
		this.initEvents();

		this.currentLine = new Line();

		var _x = -50,
			_y = 100,
			_xgl = _x + 20;

		// geweih links
		this.draw({x: 140 + _xgl, y: 20 + _y}, true);
		this.draw({x: 110 + _xgl, y: 80 + _y}, false);
		this.draw({x: 125 + _xgl, y: 50 + _y}, true);
		this.draw({x: 110 + _xgl, y: 20 + _y}, false);
		this.draw({x: 80 + _xgl, y: 80 + _y}, true);
		this.draw({x: 120 + _xgl, y: 100 + _y}, false);
		this.draw({x: 140 + _xgl, y: 100 + _y}, true);
		this.draw({x: 130 + _xgl, y: 120 + _y}, false);
		this.draw({x: 100 + _xgl, y: 60 + _y}, true);
		this.draw({x: 135 + _xgl, y: 130 + _y}, false);

		var _xgr = _xgl + 80;
		// geweih rechts
		this.draw({x: 140 + _xgr, y: 20 + _y}, true);
		this.draw({x: 170 + _xgr, y: 80 + _y}, false);
		this.draw({x: 155 + _xgr, y: 50 + _y}, true);
		this.draw({x: 170 + _xgr, y: 20 + _y}, false);
		this.draw({x: 200 + _xgr, y: 80 + _y}, true);
		this.draw({x: 160 + _xgr, y: 100 + _y}, false);
		this.draw({x: 140 + _xgr, y: 100 + _y}, true);
		this.draw({x: 150 + _xgr, y: 120 + _y}, false);
		this.draw({x: 180 + _xgr, y: 60 + _y}, true);
		this.draw({x: 145 + _xgr, y: 130 + _y}, false);

		// kopf
		this.draw({x: 180 + _x, y: 140 + _y}, true);
		this.draw({x: 150 + _x, y: 200 + _y}, false);
		this.draw({x: 180 + _x, y: 230 + _y}, false);
		this.draw({x: 220 + _x, y: 230 + _y}, false);
		this.draw({x: 250 + _x, y: 200 + _y}, false);
		this.draw({x: 220 + _x, y: 140 + _y}, false);

		// sonnenbrille links
		this.draw({x: 120 + _x, y: 140 + _y}, true);
		this.draw({x: 170 + _x, y: 140 + _y}, false);
		this.draw({x: 120 + _x, y: 140 + _y}, true);
		this.draw({x: 160 + _x, y: 160 + _y}, false);

		// sonnenbrille rechts
		this.draw({x: 230 + _x, y: 140 + _y}, true);
		this.draw({x: 280 + _x, y: 140 + _y}, false);
		this.draw({x: 280 + _x, y: 140 + _y}, true);
		// this.draw({x: 235 + _x, y: 170 + _y}, false);
		this.draw({x: 240 + _x, y: 160 + _y}, false);

		// nase
		this.draw({x: 160 + _x, y: 200 + _y}, true);
		this.draw({x: 240 + _x, y: 200 + _y}, false);

		// linie
		// this.draw({x: 100, y: 500}, true);
		// this.draw({x: 440, y: 500}, false);

		this._animationColl.push([
			[{x: 100, y: 500}, true],
			[{x: 440, y: 400}, false]
		],[
			[{x: 200, y: 500}, true],
			[{x: 440, y: 400}, false]
		])

		var _me = this;

		_me.callAnimationStep();

		return this.container;
	}

	callAnimationStep(){
		var _me = this,
			_isFirst = false;

		if(!_me._currentAnmiation){
			_me._currentAnmiation = _me._animationColl.shift();

			console.log(_me._currentAnmiation);

			var _start = _me._currentAnmiation[0],
				_stop = _me._currentAnmiation[1];

			_me._currentAnmiationQueue = this.calcWaypoints([_start[0], _stop[0]]);

			_isFirst = true;
		}

		var _next = _me._currentAnmiationQueue.shift();

		if(!_next){
			return;
		}

		if(_isFirst){
			_me.draw(_next, true);
		}else{
			_me.draw(_next, false);
		}

		window.setTimeout(function(){
			_me.callAnimationStep();
		}, 50);

	}

	calcWaypoints(pWaypoint:any){
		var _waypoints=[];
		// debugger;
		for(var i=1;i<pWaypoint.length;i++){
			var pt0=pWaypoint[i-1];
			var pt1=pWaypoint[i];
			var dx=pt1.x-pt0.x;
			var dy=pt1.y-pt0.y;
			for(var j=0;j<100;j++){
				var x=pt0.x+dx*j/100;
				var y=pt0.y+dy*j/100;
				_waypoints.push({x:x,y:y});
			}
		}
		return _waypoints;
	}

	/**
	 *
	 * @returns
	 */
	draw(pCoords:any, pMoveTo:Boolean){
		// console.log('asd', arguments);
		if(!this.currentLine){
			console.log('no line');
			return;
		}

		var _line = this.currentLine;

		if(!_line.sprite){
			console.log('no line sprite');
			_line.sprite = new PIXI.Graphics();

			this.container.addChild(_line.sprite);

			_line.sprite.beginFill(0xffffff);
			_line.sprite.lineStyle(1, 0xffffff);

			var glowfilter = new GlowFilter({
				distance:20,
				quality:1,
				outerStrength: 8,
				innerStrength: 1,
				// color: 0xffff0f
				color: 0xe0ff7a
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

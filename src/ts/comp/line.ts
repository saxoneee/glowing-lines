import * as PIXI from 'pixi.js';
import {GlowFilter} from '@pixi/filter-glow';
import { LineConfig } from './lineconfig.interface';


export default class Line {
	coords:Array<any> = [];

	seconds:number = 0;

	tickCounter:number = 0;

	sprite:any = null;

	path:Array<any> = [];
	start:any = null;
	stop:any = null;

	startSecond:number = 0;

	glowDirection:number = 1;

	constructor(pConfig:LineConfig){
		this._createSprite();

		var _start, _stop;


		if(pConfig.animation){
			_start = this._calcWaypoints([pConfig.startCoords[0], pConfig.stopCoords[0]], pConfig.stepCount);
			_stop = this._calcWaypoints([pConfig.startCoords[1], pConfig.stopCoords[1]], pConfig.stepCount);
			for(var _i = 0; _i < _start.length; _i++){
				this.path.push([_start[_i], _stop[_i]]);
			}
		}else{
			this.path = [pConfig.stopCoords];
		}

		if(pConfig.startSecond){
			this.startSecond = pConfig.startSecond;
		}

		pConfig.container.addChild(this.sprite);
	}

	_createSprite(){
		var _sprite = new PIXI.Graphics();

		var glowfilter = new GlowFilter({
			distance:20,
			quality:1,
			outerStrength: 7,
			innerStrength: 0,
			// color: 0xffff0f
			color: 0xe0ff7a
		})

		_sprite.filters = [glowfilter];

		this.sprite = _sprite;
	}

	_calcWaypoints(pWaypoint:any, pStepCount:number = 100){
		var _waypoints=[],
			_last = pWaypoint[1];

		for(var i=1;i<pWaypoint.length;i++){
			var pt0=pWaypoint[i-1];
			var pt1=pWaypoint[i];
			var dx=pt1.x-pt0.x;
			var dy=pt1.y-pt0.y;
			for(var j=0;j<pStepCount-1;j++){
				var x=pt0.x+dx*j/pStepCount;
				var y=pt0.y+dy*j/pStepCount;
				_waypoints.push({x:x,y:y});
			}
		}
		_waypoints.push(_last);
		return _waypoints;
	}

	draw(){
		if(this.startSecond > this.seconds){
			return;
		}

		var _next = this.path.shift();

		if(!_next){
			return;
		}

		this.sprite.clear();
		this.sprite.beginFill(0xffffff);
		this.sprite.lineStyle(1, 0xffffff);

		// console.log('draw', _next[0], _next[1]);
		this.sprite.moveTo(_next[0].x + 0.5, _next[0].y + 0.5);
		this.sprite.lineTo(_next[1].x + 0.5, _next[1].y + 0.5);
	}

	tick(delta:number){
		this.tickCounter++;

		if(this.tickCounter === 60){
			this.tickCounter = 0;
			this.seconds++;
		}
	}
}

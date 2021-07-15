import * as PIXI from 'pixi.js';
import {GlowFilter} from '@pixi/filter-glow';

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

	constructor(pStartCoords:any, pStopCoords:any, pStartSecond:number, pContainer:any){
		this._createSprite();
		this.start = pStartCoords;
		this.stop = pStopCoords;
		this.path = this._calcWaypoints([this.start, this.stop]);

		if(pStartSecond){
			this.startSecond = pStartSecond;
		}

		pContainer.addChild(this.sprite);
	}

	_createSprite(){
		var _sprite = new PIXI.Graphics();

		_sprite.beginFill(0xffffff);
		_sprite.lineStyle(1, 0xffffff);

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

	_calcWaypoints(pWaypoint:any){
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

	draw(){
		if(this.startSecond > this.seconds){
			return;
		}

		this.sprite.moveTo(this.start.x + 0.5, this.start.y + 0.5);

		var _next = this.path.shift();

		if(!_next){
			return;
		}

		this.sprite.lineTo(_next.x + 0.5, _next.y + 0.5);
	}

	tick(delta:number){
		this.tickCounter++;

		if(this.tickCounter === 60){
			this.tickCounter = 0;
			this.seconds++;
		}
	}
}

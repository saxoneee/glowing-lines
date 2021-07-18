import { CircleConfig } from './circleconfig.interface';
import Line from './line';
import { LineConfig } from './lineconfig.interface';


export default class Circle extends Line{
	config:CircleConfig;

	radiusStart:number;
	radiusStop:number;

	constructor(pConfig:CircleConfig){
		super(pConfig as LineConfig);
		this.config = pConfig;
	}

	init(){
		super.init();
		var _cfg = this.config;

		var _radiusList = this._calcWaypoints([{x:_cfg.radiusStart, y:0},{x:_cfg.radiusStop, y:0}], _cfg.stepCount);

		for(var _i = 0; _i < _radiusList.length; _i++){
			this.path[_i][1].radius = _radiusList[_i].x;
		}
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

		this.sprite.lineStyle(1, 0xffffff);
		this.sprite.drawCircle(_next[1].x, _next[1].y, _next[1].radius);
	}
}

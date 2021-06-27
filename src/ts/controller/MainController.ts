import * as PIXI from 'pixi.js';

import {GlowFilter} from '@pixi/filter-glow';

export default class MainController {
	container:any;

	tickCounter:number = 0;

	init(pWidth:number, pHeight:number){
		this.container = new PIXI.Container;

		var line = new PIXI.Graphics();

		line.beginFill(0xffffff);
		line.lineStyle(.5, 0xffffff);

		line.moveTo(100,100);
		line.lineTo(200,200);

		this.container.addChild(line);

		var glowfilter = new GlowFilter({
			distance:20,
			quality:1,
			outerStrength: 15,
			color: 0xffff0f
		})

		line.filters = [glowfilter];

		return this.container;
	}

	initEvents(){

	}

	tick(delta: number){
		this.tickCounter++;




		if(this.tickCounter == 60){
			this.tickCounter = 0;
		}
	}


}

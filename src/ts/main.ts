import './bootstrap';

import * as PIXI from 'pixi.js';

import MainController from './controller/MainController';
import OptionsController from './controller/OptionsController';

// PIXI.Loader.shared.add('./src/assets/img/sprites.json').load(function(){startGame()});


function start(){
	//Create a Pixi Application
	let app = new PIXI.Application({
		width: 210,
		height: 430,
		antialias: true,
		backgroundAlpha: 0,
		resolution: 1
	});

	const main = new MainController();

	document.body.appendChild(app.view);

	app.stage.addChild(main.init(app.view.width, app.view.height));
	app.ticker.add(delta => gameLoop(delta));

	function gameLoop(delta:number){
		main.tick(delta);
	}
}

start();

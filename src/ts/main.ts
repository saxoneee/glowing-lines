import './bootstrap';

import * as PIXI from 'pixi.js';

import MainController from './controller/MainController';
import OptionsController from './controller/OptionsController';

// PIXI.Loader.shared.add('./src/assets/img/sprites.json').load(function(){startGame()});


function start(){
	//Create a Pixi Application
	let app = new PIXI.Application({
		width: 512,
		height: 512,
		antialias: true,
		backgroundColor: 0x000000,
		resolution: 1
	});

	const main = new MainController();
	const options = new OptionsController();

	document.body.appendChild(app.view);
	document.body.appendChild(options.getView());

	app.stage.addChild(main.init(app.view.width, app.view.height));
	app.ticker.add(delta => gameLoop(delta));

	function gameLoop(delta:number){
		main.tick(delta);
	}
}

start();

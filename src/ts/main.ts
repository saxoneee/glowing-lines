import './bootstrap';

import * as PIXI from 'pixi.js';

import MainController from './controller/MainController';

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

	//Add the canvas that Pixi automatically created for you to the HTML document
	document.body.appendChild(app.view);

	const main = new MainController();
	const container = main.init(app.view.width, app.view.height);

	app.stage.addChild(container);
	app.ticker.add(delta => gameLoop(delta));

	function gameLoop(delta:number){
		main.tick(delta);
	}
}

start();

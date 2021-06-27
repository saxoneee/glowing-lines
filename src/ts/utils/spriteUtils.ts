import * as PIXI from 'pixi.js';

export default new class SpriteUtils {
	getTextureByName(pName:string){
		// return PIXI.utils.TextureCache[pName];
	}

	getAnimatedTextureByName(pName:string){
		// return PIXI.Loader.shared.resources['./src/assets/img/sprites.json'].spritesheet.animations[pName];
	}

	getSimpleSprite(){

		// new 'PIXI.Texture(PIXI.Texture.WHITE);
		// cons't _rectangle = new PIXI.Sprite(PIXI.Texture.WHITE);
		// _rectangle.tint = 0x000000;

		// _rectangle.alpha = 1;

		// return _rectangle;
	}
}

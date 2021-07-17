import Line from "../comp/line";

export class AbstractView{

	container:any;
	lines:Array<Line>;

	constructor(pContainer:any){
		this.container = pContainer;
		this.init();
	}

	init(){}

	generateLines(pList:Array<any>){
		var _lineList:Array<any> = [];

		for(var _i = 0; _i < pList.length; _i++){
			_lineList.push(new Line({
				startCoords: pList[_i].start,
				stopCoords: pList[_i].stop,
				startSecond: pList[_i].timeStart,
				animation: true,
				container: this.container,
				stepCount: pList[_i].stepCount || 100
			}));
		}

		return _lineList;
	}

	getLines(){
		return this.lines;
	}

	destroy(){
		for(var _i = 0; _i < this.lines.length; _i++){
			this.lines[_i].sprite.destroy();
		}

		this.lines = null;
	}

	tick(delta:number){
		for(var _i = 0; _i < this.lines.length; _i++){
			this.lines[_i].tick(delta);
		}
	}
}

import Circle from "../comp/circle";
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
			var _line:Line = new Line({
				startCoords: pList[_i].start,
				stopCoords: pList[_i].stop,
				startSecond: pList[_i].timeStart,
				animation: pList[_i].animation,
				container: this.container,
				stepCount: pList[_i].stepCount || 100
			});
			_line.init();
			_lineList.push(_line);
		}

		return _lineList;
	}

	generateCircles(pList:Array<any>){
		var _lineList:Array<any> = [];

		for(var _i = 0; _i < pList.length; _i++){
			var _circle:Circle = new Circle({
				startCoords: pList[_i].start,
				stopCoords: pList[_i].stop,
				startSecond: pList[_i].timeStart,
				animation: pList[_i].animation,
				container: this.container,
				stepCount: pList[_i].stepCount || 100,
				radiusStart: pList[_i].radiusStart,
				radiusStop: pList[_i].radiusStop,
			});
			_circle.init();
			_lineList.push(_circle);
		}

		return _lineList;
	}

	morphTo(pView:AbstractView){

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

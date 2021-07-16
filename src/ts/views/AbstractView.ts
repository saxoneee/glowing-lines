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
				container: this.container
			}));
		}

		return _lineList;
	}

	getLines(){
		return this.lines;
	}
}

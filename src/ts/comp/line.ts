export default class Line {
	coords:Array<any> = [];

	sprite:any = null;

	getNextLineCoords(){
		var _start = this.coords[0];
		this.coords.splice(0,1);

		return _start;
	}
}

export default class Line {
	coords:Array<any> = [];

	sprite:any = null;

	addCoords(pCoords:any){
		this.coords.push(pCoords);

		if(this.coords.length > 2){
			// this.coords.splice(0,1);
		}
	}
}

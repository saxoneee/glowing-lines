export default class OptionsController {
	view:HTMLDivElement = null;

	constructor(){
		this.view = document.createElement('div');

		var radio1:HTMLInputElement = document.createElement('input');
		var radio2:HTMLInputElement = document.createElement('input');
		var label1:HTMLLabelElement = document.createElement('label');
		var label2:HTMLLabelElement = document.createElement('label');

		radio1.name = 'linetype';
		radio1.type = 'radio';
		radio1.checked = true;
		radio2.name = 'linetype';
		radio2.type = 'radio';

		label1.appendChild(radio1);
		label1.appendChild(document.createTextNode('free'));
		label2.appendChild(radio2);
		label2.appendChild(document.createTextNode('straight'));
		this.view.appendChild(label1);
		this.view.appendChild(label2);
	}

	getView(){
		return this.view;
	}
}

export default class OptionsController {
	view:HTMLDivElement = null;

	constructor(){
		this.view = document.createElement('div');
		this.view.classList.add('options');

		var radio1:HTMLInputElement = document.createElement('input');
		var radio2:HTMLInputElement = document.createElement('input');
		var radio3:HTMLInputElement = document.createElement('input');
		var label1:HTMLLabelElement = document.createElement('label');
		var label2:HTMLLabelElement = document.createElement('label');
		var label3:HTMLLabelElement = document.createElement('label');

		radio1.name = 'sketch';
		radio1.type = 'radio';
		radio1.value = 'deer';
		radio1.checked = true;
		radio2.name = 'sketch';
		radio2.type = 'radio';
		radio2.value = 'fox';
		radio3.name = 'sketch';
		radio3.type = 'radio';
		radio3.value = 'skyline';

		label1.appendChild(radio1);
		label1.appendChild(document.createTextNode('deer'));
		label2.appendChild(radio2);
		label2.appendChild(document.createTextNode('fox'));
		label3.appendChild(radio3);
		label3.appendChild(document.createTextNode('skyline'));
		this.view.appendChild(label1);
		this.view.appendChild(label2);
		this.view.appendChild(label3);
	}

	getView(){
		return this.view;
	}
}

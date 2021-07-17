export default class OptionsController {
	view:HTMLDivElement = null;

	constructor(){
		this.view = document.createElement('div');
		this.view.classList.add('options');

		this.view.appendChild(this.getOption('Deer', 'deer', false));
		this.view.appendChild(this.getOption('Fox', 'fox', false));
		this.view.appendChild(this.getOption('Skyline', 'skyline', false));
		this.view.appendChild(this.getOption('Morph', 'morph', true));

	}

	getOption(pLabel:string,pValue:string,pChecked:boolean = false){
		var radio:HTMLInputElement = document.createElement('input'),
			label:HTMLLabelElement = document.createElement('label');

		radio.name = 'sketch';
		radio.type = 'radio';
		radio.value = pValue;
		radio.checked = pChecked;

		label.appendChild(radio);
		label.appendChild(document.createTextNode(pLabel));

		return label;
	}

	getView(){
		return this.view;
	}
}

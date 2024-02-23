
import { Component } from '@angular/core';
import { Header } from '../../utils/header';

@Component({
	selector: 'header',
	standalone: true,
	templateUrl: 'header.component.html',
	styleUrl: 'header.component.css'
})
export class HeaderComponent {

	constructor(
		public header: Header
	){
		
	}
}

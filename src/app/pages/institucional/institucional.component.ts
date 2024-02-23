
import { Component } from '@angular/core';
import { Header } from '../../utils/header';

@Component({
  selector: 'institucional',
  templateUrl: 'institucional.component.html',
  styleUrl: 'institucional.component.css'
})
export class InstitucionalComponent {	
    constructor(
		public header: Header,
	){
		this.header.tituloAtivo.next('Institucional');
    }
}

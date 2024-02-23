import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class Header {
    tituloAtivo = new BehaviorSubject<string>('');

    constructor(
    ) {

    }

}
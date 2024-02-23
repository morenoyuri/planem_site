
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { InstitucionalComponent } from "./institucional.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule ({
    declarations: [ 
        InstitucionalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FontAwesomeModule,
    ],
})

export class InstitucionalModule {}
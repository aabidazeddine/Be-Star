import {CommonModule} from "@angular/common";
import {routing} from "./caisse-routing.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap/modal"
import {CaisseComponent} from "./caisse.component";

@NgModule({
  imports: [ routing,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [CaisseComponent]
})
export class CaisseModule { }

import {CommonModule} from "@angular/common";
import {routing} from "./etat-routing.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap/modal"
import {EtatComponent} from "./etat.component";
@NgModule({
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [EtatComponent]
})
export class EtatModule { }

import {CommonModule} from "@angular/common";
import {routing} from "./utilisateur-routing.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap/modal"
import {UtilisateurComponent} from "./utilisateur.component";

@NgModule({
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [UtilisateurComponent]
})
export class UtilisateurModule { }

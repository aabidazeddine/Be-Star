import {CommonModule} from "@angular/common";
import {routing} from "./livraison-routing.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap/modal"
import {ConsulterLivraisonComponent} from "./consulter-livraison/consulter-livraison.component";
import {ListeLivraisonComponent} from "./liste-livraison/liste-livraison.component";
import {ReceptionnerLivraisonComponent} from "./receptionner-livraison/receptionner-livraison.component";


@NgModule({
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ConsulterLivraisonComponent, ListeLivraisonComponent, ReceptionnerLivraisonComponent]

})
export class LivraisonModule {
}

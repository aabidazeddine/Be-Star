import {CommonModule} from "@angular/common";
import {routing} from "./stock-routing.module";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap/modal"
import {StockComponent} from "./stock.component";

@NgModule({
  imports: [
    routing,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    StockComponent
  ],
  providers: []
})
export class StockModule { }

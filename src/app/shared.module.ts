import { NgModule, ModuleWithProviders} from "@angular/core";
import { CommonModule } from '@angular/common'; //Library for using Angular in a web browser




@NgModule({
  imports: [CommonModule],
  declarations: [
               ],
   exports: [
                  ]

})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
        return {
                ngModule: SharedModule
               }
    }
  }

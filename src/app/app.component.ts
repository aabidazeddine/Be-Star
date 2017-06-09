import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {BreadcrumbService} from "ng2-breadcrumb/bundles/components/breadcrumbService";


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',

})

export class AppComponent {

  constructor(private router: Router){
  }
}

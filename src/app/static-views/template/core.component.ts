import {Component, ElementRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, CanActivate, ActivatedRouteSnapshot} from "@angular/router";
import {Location} from "@angular/common";
import {SharedService} from "../../shared-service/sharedService";
import {UserService}  from "../../shared-service/user-service/user.service"
import {BreadcrumbService} from "ng2-breadcrumb/bundles/components/breadcrumbService";

@Component({
  selector: 'core-app',
  templateUrl: 'core.component.html',
  styleUrls: ['core.component.css'],
  providers:[UserService,BreadcrumbService]

})

export class CoreComponent {
  private showOngle: boolean=true;

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  logout() {

  }
}

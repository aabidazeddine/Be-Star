import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "ng2-breadcrumb/bundles/components/breadcrumbService";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers:[BreadcrumbService]
})
export class StockComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
  }

}

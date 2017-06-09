/**
 * Created by alibousenna on 25/02/2017.
 */
import {Directive, OnDestroy} from '@angular/core';
import { Router} from '@angular/router';

@Directive({
    selector: '[protected]'
})
export class ProtectedDirective implements OnDestroy {
    private sub:any = null;
    private isAnthentified:boolean;

    constructor( private router:Router) {
      // console.log("direcive")
        if(localStorage["email"]==null)
            this.isAnthentified=false;
        else
            this.isAnthentified=true;


    }

    ngOnDestroy() {
        console.log("ali")
    }
}
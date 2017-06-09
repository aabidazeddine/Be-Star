import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class SharedService {
    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    constructor() {
        
        if( localStorage['username']!=null)
            this._showNavBar.next(true);
        else
            this._showNavBar.next(false);
    }

    showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }

}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({

  selector: 'logout',
  templateUrl: 'logout.component.html',

})

export class LogoutComponent implements OnInit {
    model: any = {};
    loading = false;
    private loggedIn = false;

    constructor(private router: Router) {
        sessionStorage["diagrame"]=0;
    }

    ngOnInit() {
        sessionStorage["diagrame"]=0;

        localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('firstname');
      localStorage.removeItem('contributor');
      localStorage.removeItem('admin');
      localStorage.removeItem('role');
      this.loggedIn = false;
      this.loggedIn = (localStorage.getItem('username'))?true:false;
      location.reload();
      this.router.navigate(['login']);
    }
}

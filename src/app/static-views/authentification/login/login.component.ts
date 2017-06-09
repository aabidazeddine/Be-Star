import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../shared-service/user-service/user.service';
import { User } from '../../../shared-service/user-service/user';

@Component ({

  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [UserService],
})

export class LoginComponent implements OnInit {
    model: any = {};
    user: User;
    loading = false;
    private nbr  = 0;

    constructor(private router: Router, private userService: UserService) {
       // this.sharedService.showNavBar(false);
    }

    ngOnInit() {


    }



    login() {
        this.loading = true;
        if(this.model.username=='admin'&& this.model.password=='admin')
        {
            //this.sharedService.showNavBar(true);

                this.router.navigate(['home']);
        }
        else
                alert("echec authentification")
    }

    logout() {
      localStorage.removeItem('username');
        this.router.navigate(['']);
    }


}

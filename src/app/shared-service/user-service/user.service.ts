import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from "./user";

@Injectable() // injecté des dépendances au service
export class UserService {
  // Private instance variable to hold base url
  private usersUrl = '/users';
  private addUserUrl ="";
  private loginUserUrl = '/users/';
  private logoutUserUrl = '/logout';
  private updateUserUrl = '/updateUser/';
  private deleteUserUrl ='/deleteUser/';
  private optionUrl = '/membre/login';


  constructor (private http: Http) {
    let _build = (<any>http)._backend._browserXHR.build;
    (<any>http)._backend._browserXHR.build = () => {
      let _xhr = _build();
      _xhr.withCredentials = true;
      return _xhr;
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(body: User): Observable<User> {
    let bodyString = JSON.stringify(body);
        //let header = new Headers({'Content-Type': 'application/json'});
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header});

    return this.http.post(this.addUserUrl, body,options)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error || 'error'));
                  
  }

  loginUser(username: string, password: string) :Observable<Response>{
  
    //let header = new Headers({'Content-Type': 'application/json'});

 let header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: header, withCredentials: true});
   
     return this.http.get(this.loginUserUrl+username+"/"+password,options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
  logoutUser() :Observable<Response>{
    let header = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: header, withCredentials: true});



    return this.http.post(this.logoutUserUrl , '',options)
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
 

  


    deleteUser(id: string): Observable<User> {
      let header = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: header});

      return this.http.delete(this.deleteUserUrl + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateUser(body: Object): Observable<User> {
      let bodyString = JSON.stringify(body);
      let header = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: header});

      return this.http.put(this.updateUserUrl, bodyString, options)
                      .map((res: Response) => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'error'));
      }
}

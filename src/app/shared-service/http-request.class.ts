import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Livraison} from "../views/stock/livraison/shared/livraison";
export class HttpRequest {
  private url_base: string;

  constructor(private http: Http) {
  }

  public getObject<T>(url_append: string): Observable<T> {
    return this.http.get(url_append).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public postObject<T>(body: Object, url_append: string): Observable<T> {
    let bodyString = JSON.stringify(body);
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    return this.http.post(url_append, body, options).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'error'));
  }

  public updateObject<T>(body: Object, url_append: string): Observable<T> {
    let bodyString = JSON.stringify(body);
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: header});
    return this.http.put(url_append, body, options).map((res: Response) => res.json()).catch((error: any) => Observable.throw(error.json().error || 'error'));
  }

  public deleteObject<T>(url_append: string): Observable<T> {
    let header = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    // let options = new RequestOptions({ headers: header });
    return this.http.delete(url_append).map((res: Response) => res.json()).do(data => console.log('server data:', data)).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

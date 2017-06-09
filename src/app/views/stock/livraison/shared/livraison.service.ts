import {Injectable} from '@angular/core';
import {HttpRequest} from '../../../../shared-service/http-request.class';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Livraison} from "./livraison";
const URL_Livraison = "./assets/data/livraison.json";
@Injectable()
export class LivraisonService {
  private http: HttpRequest;

  constructor(private httpAngular: Http, private router: Router) {
    this.http = new HttpRequest(this.httpAngular);
  }

  public getListLivraison(): Observable<Livraison[]> {
    return this.http.getObject<Livraison[]>(URL_Livraison);
  }

  public getLivraison(id: string): Observable<Livraison> {
    return this.http.getObject<Livraison>(URL_Livraison + '/' + id);
  }

  public postLivraison(Livraison: Livraison): Observable<Livraison> {
    return this.http.postObject(Livraison, URL_Livraison);
  }

  public updateLivraison(Livraison: Livraison): Observable<Livraison> {
    return this.http.updateObject(Livraison, URL_Livraison);
  }

  public deleteLivraison(Livraison: Livraison, identifiant: string): Observable<any> {
    return this.http.deleteObject(URL_Livraison);
  }
}

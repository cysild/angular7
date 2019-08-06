import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {


constructor(private http: HttpClient) { }

const endpoint = 'http://localhost:8080'; 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


private extractData(res: Response) {
  let body = res;
  return body || { };
}
getProducts(): Observable<any> {
  return this.http.get(this.endpoint).pipe(
    map(this.extractData));
}


  getProduct(id): Observable<any> {
  return this.http.get(endpoint + 'products/' + id).pipe(
    map(this.extractData));
}

}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const baseURL = 'http://localhost:8080/api/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  create(data: { name: string; description: string }): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id: number, data: string): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GunService {
  baseUrl: string = 'http://localhost:3000/guns';
  constructor(private httpClient: HttpClient) {}

  guns(): Observable<any> {
    return this.get(`${this.baseUrl}`);
  }

  get<T>(url: string, datas?: string[]): Observable<T> {
    return this.httpClient.get<T>(url, this._getBaseHttpOptions());
  }

  post<T>(url: string, datas: any): Observable<T> {
    return this.httpClient.post<T>(url, datas, this._getBaseHttpOptions());
  }
  delete<T>(url: string, datas: string[]): Observable<T> {
    return this.httpClient.delete<T>(url, this._getBaseHttpOptions());
  }
  patch<T>(url: string): Observable<T> {
    return this.httpClient.patch<T>(url, this._getBaseHttpOptions());
  }

  private _getBaseHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Accept: 'application/json',
      }),
      withCredentials: false,
      params: {},
    };
  }
}

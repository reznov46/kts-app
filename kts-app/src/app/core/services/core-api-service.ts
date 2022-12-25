import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CoreApiService {
    constructor(private httpClient: HttpClient) {}

    get<T>(url: string, options: Object = {}): Observable<T> {
        return this.httpClient
            .get<T>(url, this.getBaseHttpOption(options))
            .pipe(catchError(this.handleError));
    }
    post<T>(url: string, data: any) {
        return this.httpClient
            .post<T>(url, data, this.getBaseHttpOption())
            .pipe(catchError(this.handleError));
    }
    put<T>(url: string, data: any): Observable<T> {
        return this.httpClient
            .put<T>(url, data, this.getBaseHttpOption())
            .pipe(catchError(this.handleError));
    }

    delete<T>(url: string, data?: string[]): Observable<T> {
        return this.httpClient
            .delete<T>(url, this.getBaseHttpOption())
            .pipe(catchError(this.handleError));
    }
    patch<T>(url: string, data: any): Observable<T> {
        return this.httpClient
            .patch<T>(url, data, this.getBaseHttpOption())
            .pipe(catchError(this.handleError));
    }
    getBaseHttpOption(additionalObject: Object = {}): Object {
        const baseObject = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                Accept: 'application/json',
            }),
        };
        return Object.assign({}, baseObject, additionalObject);
    }
    private handleError(error: HttpErrorResponse) {
        console.log(error);
        return throwError(() => error);
    }
}

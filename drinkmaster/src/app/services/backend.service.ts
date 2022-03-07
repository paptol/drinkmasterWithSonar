import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}

  invokeGet(apiUrl: string): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}`).pipe(
    //    tap(metas => console.log(`returned from ${apiUrl}`)),
      catchError(this.handleError('invokeGet', []))
    );
  }

  invokeObjectGet(apiUrl: string): Observable<any> {
    return this.http.get<any>(`${apiUrl}`).pipe(
    //    tap(metas => console.log(`returned from ${apiUrl}`)),
      catchError(this.handleError('invokeGet', null))
    );
  }

  invokeStringGet(apiUrl: string): Observable<string>{
    return this.http.get(`${apiUrl}`, {responseType: 'text'}).pipe(
        // tap(metas => console.log(`returned from ${apiUrl}`)),
       catchError(this.handleError('invokeStringGet', 'null'))
     );
  }

  invokePut(apiUrl: string, obj: any): Observable<any>{
      return this.http.put(`${apiUrl}`, obj).pipe(
        //   tap(response => console.log(response)),
        catchError(this.handleError('invokePut', 'error'))
        );
  }

  invokePost(apiUrl: string, obj: any): Observable<any>{
      return this.http.post(`${apiUrl}`, obj).pipe(
        //   tap(response => console.log(response)),
          catchError(this.handleError('invokePost', 'error'))
      );
  }

  invokePostWithOptions(apiUrl: string, obj: any, options: any): Observable<any>{
    return this.http.post(`${apiUrl}`, obj, options).pipe(
      //   tap(response => console.log(response)),
        catchError(this.handleError('invokePost', 'error'))
    );
  }

  invokePatch(apiUrl: string, obj: any): Observable<any>{
    return this.http.patch(`${apiUrl}`, obj).pipe(
      catchError(this.handleError('invokePatch', 'error'))
    );
  }

  invokeDelete(apiUrl: string): Observable<any>{
      return this.http.delete(`${apiUrl}`).pipe(
        //   tap(response => console.log(response)),
          catchError(this.handleError('invokeDelete', 'error'))
      );
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

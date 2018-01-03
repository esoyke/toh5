import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { NavLink } from './navlink';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class SidebarService {

    constructor(private http: HttpClient) { }

    private navLinksUrl = 'api/navlinks';  // URL to web api
    private navlinks;
    
      /** GET themes from the server */
    getNavlinks (): Observable<NavLink[]> {
        return this.http.get<NavLink[]>(this.navLinksUrl)
        .pipe(
            tap(navlinks => {        
            console.log('fetched '+navlinks.length+' themes');
            this.navlinks = navlinks; 
            }),
            catchError(this.handleError('getNavLinks', []))
        );
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

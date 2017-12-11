import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Theme } from './theme';
import { MessageService } from '../message.service';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// This service retrieves all themes, exposed method to update defined CSS variables to values specified for theme
@Injectable()
export class ThemeService {

  private themesUrl = 'api/themes';  // URL to web api
  private ctrl;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {    }

  /** GET themes from the server, apply the first it finds (make Forward One or default the 1st) */
  getThemes (): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.themesUrl)
      .pipe(
        tap(themes => {this.log(`fetched themes`); 
          this.updateCurrentTheme(themes[0])}),
        catchError(this.handleError('getThemes', []))
      );
  }

  /** GET theme by id. Return `undefined` when id not found */
  getThemeNo404<Data>(id: number): Observable<Theme> {
    const url = `${this.themesUrl}/?id=${id}`;
    return this.http.get<Theme[]>(url)
      .pipe(
        map(themes => themes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} theme id=${id}`);
        }),
        catchError(this.handleError<Theme>(`getTheme id=${id}`))
      );
  }

  /** GET theme by id. Will 404 if id not found */
  getTheme(id: number): Observable<Theme> {
    const url = `${this.themesUrl}/${id}`;
    return this.http.get<Theme>(url).pipe(
      tap(_ => this.log(`fetched theme id=${id}`)),
      catchError(this.handleError<Theme>(`getTheme id=${id}`))
    );
  }

  // sets the variables to values for new theme. In styles.scss, define variables within :root, 
  // then apply accordingly to your classes
  updateCurrentTheme (current: Theme){
    console.log('current theme: ',current);
    tap(_ => this.log(`updated theme to: ${current.name}`));    

    // set background color
    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--background-color', current.custom_color_background);

    // set h1/h2/h3 colors
    bodyStyles.setProperty('--header-color', current.custom_color_header);
  }

  //////// Save methods //////////

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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ThemeService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ThemeService: ' + message);
  }
}

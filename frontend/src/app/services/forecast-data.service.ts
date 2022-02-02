import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastData } from '../models/forecast-data';
@Injectable({
  providedIn: 'root',
})
export class ForecastDataService {
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
  getForecastData(): Observable<ForecastData> {
    return this.http
      .get<ForecastData>(`${environment.API_URL}${environment.API_KEY}`)
      .pipe(catchError(this.handleError));
  }
  getJsonForecastData(): Observable<ForecastData> {
    return this.http
      .get<ForecastData>(`${environment.JSON_URL}`)
      .pipe(catchError(this.handleError));
  }
}

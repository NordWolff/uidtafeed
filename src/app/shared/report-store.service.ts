import { Injectable } from '@angular/core';
import {Report} from './report';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {publish} from 'pubsub-js';
import {ReportRaw} from './report-raw';
import {catchError, map, retry} from 'rxjs/operators';
import {ReportFactory} from './report-factory';

export class HelloSpring {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReportStoreService {
  // tslint:disable-next-line:jsdoc-format
  /** private booksApi = 'https://reports-ca530.firebaseio.com/report.json';*/
  //
  /*private api = 'http://twolff.diskstation.org:8080/api/feedback';*/
  //
  private api = 'http://localhost:8080/api/feedback';

  constructor(private http: HttpClient) {}

  getWelcomeMessage(): any {
    return this.http.get<HelloSpring>(`${this.api}/welcome`);

  }

  getAll(): Observable<Report[]> {
    return this.http.get<ReportRaw[]>(`${this.api}`)
      .pipe(
        map(
          reportRaw =>
            reportRaw.map(b => ReportFactory.fromRaw(b)),
        )
      );
  }

  /**
   * Anfrage gegen die Report ID
   * @param id
   */
  findById(id: number, updateFunction: (result: Report) => void): void{
     this.http.get<ReportRaw>(
      `${this.api}/id/${id}`)
      .pipe(
        retry(3),
        map(b => ReportFactory.fromRaw(b)),
        catchError(this.errorHandler))
      .subscribe(updateFunction);
     publish('report.search', id);
  }

  /**
   * Anfrage nach String lineId
   * @param lineId
   */
  getSingle(lineId: string): Observable<Report> {
    return this.http.get<ReportRaw>(
      `${this.api}/lineId/${lineId}`
    ).pipe(
      retry(3),
      map(b => ReportFactory.fromRaw(b)),
    catchError(this.errorHandler));
  }


  remove(id: number): Observable<any> {
    return this.http.delete(
      `${this.api}/remove/${id}`,
      { responseType: 'text' }
    );
  }

  create(report: Report): Observable<any> {
    return this.http.post(
      `${this.api}/add`,
      report,
      {responseType: 'text'}
    ).pipe(); // catchError(this.errorHandler)
  }

  getAllSearch(searchTerm: string): Observable<Report[]> {
    return this.http.get<ReportRaw[]>(
      `${this.api}/search/${searchTerm}`
      // http://localhost:8080/api/feedback/search/DEU.DTAG.JGT54F
    ).pipe(
      retry(3),
      map(reportsRaw =>
      reportsRaw.map(b => {
        ReportFactory.fromRaw(b);
      }),
        ),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any>{
    console.log('Fehler ist aufgetreten');
    return throwError(error);
  }


  /*
   * stellt die Daten bei Firebase bereit
   * https://console.firebase.google.com/project/reports-ca530/database/reports-ca530/data
   */
  /*storeData(): any {
    const body = JSON.stringify(this.reports);
    const headers = new HttpHeaders({'Content-Type': 'application/json,charset=utf-8'});
    return this.http.put(this.booksApi, body, {headers});

  }*/
}

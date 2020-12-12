import { Injectable } from '@angular/core';
import {Report} from './report';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {publish} from 'pubsub-js';
import {catchError} from 'rxjs/operators';

export class HelloSpring {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReportStoreService {
  /*private booksApi = 'https://reports-ca530.firebaseio.com/report.json';*/
  //private api = 'https://twolff-cloud.net:8443';
  private api = 'https://localhost:8443';

  constructor(private http: HttpClient) {}

  getWelcomeMessage(): any {
    return this.http.get<HelloSpring>(`${this.api}/welcome`);

  }

  getAll(): Observable<Report[]> {
    return this.http.get<any[]>(`${this.api}/reports`);
  }

  findByLineId(lineId: string, updateFunction: (result: Report) => void): void{
    this.http.get<Report>(`${this.api}/report/${lineId}`).subscribe(updateFunction);
    publish('report.search', lineId);
  }

  getSingle(lineId: string): Observable<Report> {
    return this.http.get<any>(
      `${this.api}/report/${lineId}`
    );
  }


  remove(lineId: string): Observable<any> {
    return this.http.delete(
      `${this.api}/remove/${lineId}`,
      { responseType: 'text' }
    );
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

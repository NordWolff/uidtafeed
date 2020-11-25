import { Injectable } from '@angular/core';
import {Report} from './report';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportStoreService {
  /*private booksApi = 'https://reports-ca530.firebaseio.com/report.json';*/
  private api = 'http://localhost:8090';

  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };*/

  constructor(private http: HttpClient) {}

  getAll(): Observable<Report[]> {
    const url = `${this.api}/reports`;
    return this.http.get<any[]>(url);
  }

  getSingleByLineId(lineId: string): Observable<Report> {
    return this.http.get<any>(
      `${this.api}/report/${lineId}`
    );
  }


  remove(lineId: string): Observable<any> {
    const url = `${this.api}/report/${lineId}`;
    return this.http.delete(
      url,
      { responseType: 'text'}
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

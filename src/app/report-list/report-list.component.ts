import { Component, OnInit } from '@angular/core';
import {Report} from '../shared/report';
import {ReportStoreService} from '../shared/report-store.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[];

  constructor(private reportStoreService: ReportStoreService) { }

  ngOnInit(): void {
    this.reportStoreService.getAll().subscribe(res => this.reports = res);
  }

  /**
   * stellt die Daten bei Firebase bereit
   * report-store.service.ts
   * https://console.firebase.google.com/project/reports-ca530/database/reports-ca530/data
   */
  storeData(): void {
    this.reportStoreService.storeData()
      .subscribe();
  }


}

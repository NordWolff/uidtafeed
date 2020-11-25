import {Component, OnInit} from '@angular/core';
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
    this.getReports();
  }
  getReports(): void {
    this.reportStoreService.getAll()
      .subscribe(resp => {
        this.reports = resp;
        console.table(resp);
      });
  }


}

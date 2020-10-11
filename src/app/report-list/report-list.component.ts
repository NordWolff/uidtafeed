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

  constructor(private bs: ReportStoreService) { }

  ngOnInit(): void {
    this.reports = this.bs.getAll();
  }


}

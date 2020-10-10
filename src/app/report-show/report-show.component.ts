import { Component, OnInit } from '@angular/core';
import {Report} from '../shared/report';

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-report-show',
  templateUrl: './report-show.component.html',
  styleUrls: ['./report-show.component.css']
})
export class ReportShowComponent implements OnInit {
  report: Report;
  viewState: ViewState = 'list';
  constructor() { }

  ngOnInit(): void {
  }
  showList(): void {
    this.viewState = 'list';
  }
  showDetails(report: Report): void {
    this.report = report;
    this.viewState = 'details';
  }

}

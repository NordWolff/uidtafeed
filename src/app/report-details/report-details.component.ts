import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Report} from '../shared/report';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  @Input() report: Report;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  getRating(num: number): any {
    return new Array(num);
  }
  showReportList(): void {
    this.showListEvent.emit();
  }

}

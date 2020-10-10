import {Component, Input, OnInit} from '@angular/core';
import {Report} from '../shared/report';

@Component({
  selector: 'app-report-list-item',
  templateUrl: './report-list-item.component.html',
  styleUrls: ['./report-list-item.component.css']
})
export class ReportListItemComponent implements OnInit {
  @Input() report: Report;

  constructor() { }

  ngOnInit(): void {
  }

}

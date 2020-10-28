import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Report} from '../shared/report';
import {ReportStoreService} from '../shared/report-store.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  report: Report;

  constructor(
    private reportStoreService: ReportStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.reportStoreService.getSingle(params.get('lineId'))
      .subscribe(b => this.report = b);
  }
  getRating(num: number): any {
    return new Array(num);
  }


}

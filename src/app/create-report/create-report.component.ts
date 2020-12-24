import { Component, OnInit } from '@angular/core';
import {Report} from '../shared/report';
import {ReportStoreService} from '../shared/report-store.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  constructor(
    private reportStoreService: ReportStoreService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createReport(report: Report): void {
      this.reportStoreService.create(report).subscribe(() => {
        this.router.navigate(['../..', 'reports'], {relativeTo: this.route});
      });
  }

}

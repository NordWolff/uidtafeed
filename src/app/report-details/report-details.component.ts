import {Component, OnInit} from '@angular/core';
import {Report} from '../shared/report';
import {ReportStoreService} from '../shared/report-store.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  report: Report;

  constructor(
    private reportStoreService: ReportStoreService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getSingleByLineId();
    this.getfindById();

  }

  getSingleByLineId(): void{
    const params = this.route.snapshot.paramMap;
    this.reportStoreService.getSingle(params.get('lineId'))
      .subscribe(b => {
        this.report = b;
      });
  }

  getfindById(): void {
    const params = this.route.snapshot.paramMap;
    this.reportStoreService.findById(Number(params.get('lineId')), (b) => {
      this.report = b;

    });
  }

  getRating(num: number): any {
    return new Array(num);
  }

  removeReport(): void {
    if (confirm('Wirklich löschen?')) {
     this.reportStoreService.remove(this.report.id)
        .subscribe(
          res => this.router.navigate(
            ['../'],
          { relativeTo: this.route}
          )
        );
    }
  }
}

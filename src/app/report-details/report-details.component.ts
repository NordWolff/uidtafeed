import {Component, Input, OnInit, Output} from '@angular/core';
import {Report} from '../shared/report';
import {ReportStoreService} from '../shared/report-store.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  report: Array<Report>;

  constructor(
    private reportStoreService: ReportStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getfindByLineId();
  }

  getfindByLineId(): void {
    const params = this.route.snapshot.paramMap;
    this.reportStoreService.findByLineId(params.get('lineId'), (b) => {
      this.report = b,
      console.log(this.report.find());
    });
  }


  getRating(num: number): any {
    return new Array(num);
  }

  removeReport(): void {
    if (confirm('Wirklich löschen?')) {
     this.reportStoreService.remove(this.report.join('lineId'))
        .subscribe(
          res => this.router.navigate(
            ['../'],
            { relativeTo: this.route}
          )
        );
    }
  }


}

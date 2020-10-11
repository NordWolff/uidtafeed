import { Component } from '@angular/core';
import {Report} from './shared/report';

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DTAFeed';

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

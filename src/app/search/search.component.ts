import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, tap, switchMap, filter} from 'rxjs/operators';
import {ReportStoreService} from '../shared/report-store.service';
import {Report} from '../shared/report';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyUp$ = new Subject<string>();
  isLoading = false;
  foundReports: Report[] = [];

  constructor(private rss: ReportStoreService) { }

  ngOnInit(): void {
    this.keyUp$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.rss.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
      .subscribe(reports => {
        this.foundReports = reports,
          console.log(reports);
      });
  }

}

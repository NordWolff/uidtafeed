import { Component, OnInit } from '@angular/core';
import {ReportStoreService} from '../shared/report-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string;

  constructor(private reportStoreService: ReportStoreService) { }

  ngOnInit(): void {
    this.helloSpring();
  }
  helloSpring(): any {
    this.reportStoreService.getWelcomeMessage().subscribe(
      result =>  this.welcomeMessage = result.message,
    );
  }

}

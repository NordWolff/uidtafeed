import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportListItemComponent } from './report-list-item/report-list-item.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { ReportFormComponent } from './report-form/report-form.component';
import { CreateReportComponent } from './create-report/create-report.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    ReportListItemComponent,
    ReportDetailsComponent,
    HomeComponent,
    ReportFormComponent,
    CreateReportComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        DateValueAccessorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

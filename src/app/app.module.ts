import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {routing} from './app.routing';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportListItemComponent } from './report-list-item/report-list-item.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportShowComponent } from './report-show/report-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    ReportListComponent,
    ReportListItemComponent,
    ReportDetailsComponent,
    ReportShowComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {routing} from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import {PropertyBindingComponent} from './databinding/property-binding.component';
import { ReportListComponent } from './report-list/report-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    PropertyBindingComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

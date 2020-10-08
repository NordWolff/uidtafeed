import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportListComponent} from './report-list/report-list.component';

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'report', component: ReportListComponent},
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);

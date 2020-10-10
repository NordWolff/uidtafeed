import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportShowComponent} from './report-show/report-show.component';

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'report', component: ReportShowComponent},
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);

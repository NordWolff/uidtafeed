import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ReportListComponent} from './report-list/report-list.component';
import {ReportDetailsComponent} from './report-details/report-details.component';
import {CreateReportComponent} from './create-report/create-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'reports',
    component: ReportListComponent
  },
  {
    path: 'reports/:lineId',
    component: ReportDetailsComponent
  },
  {
    path: 'admin',
    redirectTo: 'admin/create',
    pathMatch: 'full'
  },
  {
    path: 'admin/create',
    component: CreateReportComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

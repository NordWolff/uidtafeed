import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportShowComponent} from './report-show/report-show.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'report', component: ReportShowComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting{}

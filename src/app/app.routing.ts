import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FeedbackComponent} from './feedback/feedback.component';

const APP_ROUTES: Routes = [
  { path: '', component: AppComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'feedback', component: FeedbackComponent}
  ];

export const routing = RouterModule.forRoot(APP_ROUTES);

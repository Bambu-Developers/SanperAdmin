import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/account/account.module#AccountModule',
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'ui-elements',
    component: UiElementsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

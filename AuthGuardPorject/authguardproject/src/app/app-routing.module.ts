import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate:[authGuard]
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[authGuard]
  },
  {
    path: '**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

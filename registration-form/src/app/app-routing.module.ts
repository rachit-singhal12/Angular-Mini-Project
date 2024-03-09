import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'overview',
        component: OverviewComponent
      }
    ]
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'registrationform',
    component: RegistrationFormComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'user/:id',
    component : UserComponent
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

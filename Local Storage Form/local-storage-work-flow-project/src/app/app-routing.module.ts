import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { TableDataComponent } from './table-data/table-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'additem',
    component:AddItemComponent
  },
  {
    path:'additem/:key',
    component:AddItemComponent
  },
  {
    path:'tabledata',
    component:TableDataComponent,
  },
  {
    path:'**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

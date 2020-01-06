import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TableofcontentComponent } from './tableofcontent/tableofcontent.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'tableofcomponent',component:TableofcontentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

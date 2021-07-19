import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path:"", component:HompageComponent

  },
  {
    path:"blog",component:BlogComponent
  },
  {
    path:'traveloffers/:offerId',component:TravelComponent
  },
  {
    path:"cart",component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

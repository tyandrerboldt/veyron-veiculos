import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "vehicles",
    component: VehiclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

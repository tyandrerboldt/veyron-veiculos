import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: FormComponent
  },
  {
    path: 'update/:id',
    component: FormComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class VehiclesRoutingModule { }

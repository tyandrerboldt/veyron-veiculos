import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ListComponent } from './list/list.component';
import { TemplateModule } from './../../components/template/template.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    TemplateModule
  ]
})
export class VehiclesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms'
import { TemplateModule } from './../../components/template/template.module';
import { FormComponent } from './form/form.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    TemplateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: []
})
export class VehiclesModule { }

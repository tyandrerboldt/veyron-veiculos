import { TemplateModule } from './../../components/template/template.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRountingModule } from './home-rounting.module';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    TemplateModule,
    HomeRountingModule
  ]
})
export class HomeModule { }

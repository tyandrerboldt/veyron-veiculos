import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TemplateComponent]
})
export class TemplateModule { }

import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    TemplateComponent
  ],  
  exports: [TemplateComponent]
})
export class TemplateModule { }

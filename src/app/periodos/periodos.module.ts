import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodosRoutingModule } from './periodos-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PeriodosRoutingModule,
    SharedModule
  ]
})
export class PeriodosModule { }

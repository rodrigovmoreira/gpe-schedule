import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoBreadcrumbModule, PoDynamicModule, PoLoadingModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule, PoPageDynamicTableModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoPageDynamicSearchModule,
    PoPageDynamicTableModule,
    PoPageModule,
    PoTableModule,
    PoBreadcrumbModule,
    PoDynamicModule,
    PoLoadingModule,
  ],
  exports: [
    PoPageDynamicSearchModule,
    PoPageDynamicTableModule,
    PoPageModule,
    PoTableModule,
    PoBreadcrumbModule,
    PoDynamicModule,
    PoLoadingModule,
  ],
})
export class SharedModule { }

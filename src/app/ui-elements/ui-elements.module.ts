import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { TableComponent } from './table/table.component';
import { AccordionModule } from './accordion/accordion.module';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    TableComponent,
    AccordionComponent  
  ],
  imports: [
    CommonModule,
    AccordionModule,
    MatTableModule
  ],
  exports: [
    TableComponent,
    AccordionComponent,
    MatTableModule,
  ]
})
export class UIElementsModule { }

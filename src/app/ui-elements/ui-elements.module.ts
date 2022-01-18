import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableComponent,
    MatTableModule
  ]
})
export class UiElementsModule { }

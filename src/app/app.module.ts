import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataComponent } from './airtable-crud/get-data/get-data.component';

import { AirtableCrudService } from './service/airtable-crud/airtable-crud.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { PaginationpipePipe } from './pipes/pagination/paginationpipe.pipe';
import {MatButtonModule} from "@angular/material/button"
import {MatTableModule, _MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table"
import { DatatabelComponent } from './angularmaterial/datatable/datatabel/datatabel.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from "@angular/material/input";
import { FilterPageComponent } from './angularmaterial/datatable/filter-page/filter-page.component'

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent,

    SearchfilterPipe,
    PaginationpipePipe,
    DatatabelComponent,
    FilterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [AirtableCrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}

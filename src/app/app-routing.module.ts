import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDataComponent } from './airtable-crud/get-data/get-data.component';
import { DatatabelComponent } from './angularmaterial/datatable/datatabel/datatabel.component';
import { FilterPageComponent } from './angularmaterial/datatable/filter-page/filter-page.component';


const routes: Routes = [

  {
    path: '',
    component: DatatabelComponent,
  },
  {
    path: 'airtable',
    component: FilterPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

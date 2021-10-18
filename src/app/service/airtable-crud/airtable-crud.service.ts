import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AirtableCrudService {
  dataa: any | undefined;
  url = 'https://v1.nocodeapi.com/software_lcs_net/airtable/lIMKcwUHRnsAwiqA?tableName=SA00_Tab1_Users&api_key=zdvYxKTSPqgtDTYmI'

  token = 'Bearer keyvzdpbj8l3WeU1E';
  rolelistdata: any | undefined;
  carerlistdata: any | undefined;
  responseofpost: any | undefined;
  records: any | undefined;

  constructor(private http: HttpClient) {}

  getDataAirtable(): Observable<any> {
    this.dataa = this.http.get(this.url);
    console.log(this.dataa);
    return this.dataa;
  }
}

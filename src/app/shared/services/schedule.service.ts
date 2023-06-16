import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoLookupResponseApi } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  getSchedule(){
    return this.http.get<any[]>(`/api/v1/periodos/processes`);
  }

}

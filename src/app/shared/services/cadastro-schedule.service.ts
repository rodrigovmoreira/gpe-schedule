import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroScheduleService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get(`/api/v1/schedule`);
  }

  public findById(id: string) {
    return this.http.get(`/api/v1/schedule/${id}`);
  }

  public save(data: any ) {
    return this.http.post(`/api/v1/schedule`, data);
  }

  public update(data: any ) {
    return this.http.put(`/api/v1/schedule/${data.id}`, data);
  }

}

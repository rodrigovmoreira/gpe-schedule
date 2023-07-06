import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';
import { ScheduleService } from '../shared/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public listaRoteiros: any = ''

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' }, { label: 'Schedule', link: 'schedule' }]
  };


  // PLEASE ADD THE API URL SERVICE HERE

  //readonly apiService = this.getItems()
  //readonly apiService = 'http://localhost:8080/rest/api/v1/processes';
  readonly apiService = 'https://schedule.free.mockoapp.net/api/v1';

  constructor(
    private ScheduleService: ScheduleService
  ) { }

  ngOnInit() {
    console.log(this.apiService, 'API-SERVICE')
    this.getItems()
  }

  getItems() {
    this.ScheduleService.getSchedule().subscribe((res) => {
      this.listaRoteiros = res
      console.log(this.listaRoteiros.items, 'Quase lá')
      console.log(res, 'Teste data')
   })
  }
}






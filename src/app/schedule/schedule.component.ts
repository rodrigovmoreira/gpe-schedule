import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { ScheduleService } from '../shared/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public blabla : any[] = [];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' },{ label: 'Schedule', link: 'schedule' }]
  };

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = '/api/v1/periodos/processes';

  constructor(
    private ScheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.getItems()
   }

  getItems() {
    this.ScheduleService.getSchedule().subscribe((response: any[]) => {
      this.blabla = response
      console.log(response,'Teste data')
    })
  }
}

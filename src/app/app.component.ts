import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: "po-icon po-icon-home", shortLabel: 'Home' },
    { label: 'Períodos', link: '/periodos', icon: "po-icon po-icon-calendar", shortLabel: 'Períodos' },
    { label: 'Schedule', link: '/schedule', icon: "po-icon po-icon-calendar-settings", shortLabel: 'Schedule' },
    { label: 'Cadastro Schedule', link: '/cadastro-schedule', icon: "po-icon po-icon-calendar", shortLabel: 'Cad. Sch.' },

  ];

}

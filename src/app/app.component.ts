import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuItemSelected: string | undefined;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: "po-icon po-icon-home", shortLabel: 'Home' },
    { label: 'Períodos', link: '/periodos', icon: "po-icon po-icon-calendar", shortLabel: 'Períodos' },
    { label: 'Schedule', link: '/schedule', icon: "po-icon po-icon-calendar-settings", shortLabel: 'Schedule' },
    { label: 'Cadastro Schedule', link: '/cadastro-schedule', icon: "po-icon po-icon-calendar", shortLabel: 'Cad. Sch.' },
    {
      label: 'Useful links',
      icon: 'po-icon-share',
      shortLabel: 'Links',
      subItems: [
        { label: 'Ministry of Labour', action: this.printMenuAction.bind(this), link: 'http://trabalho.gov.br/' },
        { label: 'SindPD Syndicate', action: this.printMenuAction.bind(this), link: 'http://www.sindpd.com.br/' }
      ]
    }
  ];

  constructor(
    private _http: HttpClient
    
    ) { }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }


}

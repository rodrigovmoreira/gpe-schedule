import { Component } from '@angular/core';
import { PoBreadcrumb, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-cadastro-schedule',
  templateUrl: './cadastro-schedule.component.html',
  styleUrls: ['./cadastro-schedule.component.scss']
})
export class CadastroScheduleComponent {

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' },{ label: 'Cadastro de Schedule', link: '/' }]
  };

  public tableColumns: PoTableColumn[] = [
    { label: 'Id', property: 'id' },
    { label: 'Nome exemplo1', property: 'Nome' },
    { label: 'Nome exemplo2', property: 'Nome' },
    { label: 'Nome exemplo3', property: 'Nome' },
    { label: 'Nome exemplo4', property: 'Nome' },
    { label: 'Nome exemplo5', property: 'Nome' },
  ]
}

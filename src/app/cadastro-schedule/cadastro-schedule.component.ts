import { Component } from '@angular/core';
import { PoBreadcrumb, PoTableAction, PoTableColumn, PoTableColumnSort } from '@po-ui/ng-components';
import { CadastroScheduleService } from '../shared/services/cadastro-schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-schedule',
  templateUrl: './cadastro-schedule.component.html',
  styleUrls: ['./cadastro-schedule.component.scss']
})
export class CadastroScheduleComponent {

  public isBusy: boolean = false;
  public tableItems = [];
  public isLoading: boolean = false;
  public showMoreDisabled: boolean = false;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/home' },{ label: 'Cadastro de Schedule', link: '/' }]
  };

  public readonly tableActions: Array<PoTableAction> = [
    {
      label: 'Editar',
      icon: 'po-icon-edit',
      action: (row: any) => this.router.navigate(["/schedule/", row.id, "edit"])
    }
  ];

  public tableColumns: PoTableColumn[] = [
    { label: 'Código', property: 'id' },
    { label: 'Id User', property: 'userid' },
    { label: 'Nome User', property: 'nameuser' },
    { label: 'Rotina', property: 'routine' },
    { label: 'Data', property: 'date' },
    { label: 'Hora', property: 'hour' },
    { label: 'Ambiente', property: 'environment' },
    { label: 'Status', property: 'status' },
    { label: 'Módulo', property: 'module' },
  ]

  get hasSelectedItems(): boolean {
    return this.tableItems.filter( (item: any) => item.$selected).length > 0;
  }

  constructor(
    private service: CadastroScheduleService,
    private router: Router,

  ) {}

  addItem() {

  }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.isBusy = true;
    this.service.getData().subscribe({
      next: (response: any) => {
        this.tableItems = response.items;
      },complete: () => this.isBusy = false
    })
  }

  showMore() {
    this.isLoading = true
    this.showMoreDisabled = true;
    //setTimeout(() => {
      //this.items = this.getItems(sort);
      //this.isLoading = false;
    //}, 4000);
    //this.addItem();
  }


}



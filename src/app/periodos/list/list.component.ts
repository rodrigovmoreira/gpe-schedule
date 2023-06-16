import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoDialogService, PoNotificationService, PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { PeriodosService } from '../periodos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public isBusy: boolean = false;
  public tableItems = [];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/home' },{ label: 'Períodos', link: 'periodos' }
    ]
  };

  public readonly tableActions: Array<PoTableAction> = [
    {
      label: 'Editar',
      icon: 'po-icon-edit',
      action: (row: any) => this.router.navigate(["/periodos/", row.id, "edit"])
    }
  ];

  public tableColumns: PoTableColumn[] = [
    { label: 'Roteiro', property: 'roteir' },
    { label: 'Periodo', property: 'periodo' },
    { label: 'Descrição', property: 'description' },
    { label: 'Núm. Pagto.', property: 'numpag' },
    { label: 'Processo', property: 'process' },
    { label: 'Mês', property: 'mes' },
    { label: 'Ano', property: 'ano' },
    { label: 'Dt. Inicio', property: 'dataini' },
    { label: 'Dt. Fim', property: 'datafim' },
    { label: 'Dt. Pagto.', property: 'datapag' },
  ]


  public pageActions: PoPageAction[] = [
    { label: "Períodos", url: "/periodos/create", icon: "po-icon-plus-circle" },
    { label: "Excluir selecionados", action: this.onDeleteSelected.bind(this), icon: "po-icon-delete", disabled: !this.hasSelectedItems, type: 'danger' },
  ]

  get hasSelectedItems(): boolean {
    return this.tableItems.filter( (item: any) => item.$selected).length > 0;
  }

  constructor(
    private service: PeriodosService,
    private router: Router,
    private poDialog: PoDialogService,
    private notification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.isBusy = true;
    this.pageActions[1].disabled = true;
    this.service.getData().subscribe({
      next: (response: any) => {
        this.tableItems = response.items;
      },complete: () => this.isBusy = false
    })
  }

  private onDeleteSelected() {

  }

  public refreshDeleteButton() {
    const selectedRows = this.tableItems.filter( (item: any) => item.$selected);
    this.pageActions[1].disabled = selectedRows.length === 0;
  }

}

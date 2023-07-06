import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoDynamicFormComponent, PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { PeriodosService } from '../periodos.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild(PoDynamicFormComponent, { static: true }) dynamicForm: PoDynamicFormComponent | any;

  public isBusy: boolean = false;
  public editMode: boolean = false;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/home' },{ label: 'Períodos', link: '/periodos' },{ label: 'Cadastro de Períodos' }
    ]
  };

   get isFormInvalid(): boolean {
     if (this.dynamicForm)
       return this.dynamicForm.form.invalid as boolean;
     return true;
   }

  public readonly formFields: PoDynamicFormField[] = [
    {
      property: 'per',
      required: true,
      label: 'Periodo',
      gridColumns: 6,
      placeholder: 'Período'
    },
    {
      label: 'Processo',
      property: 'processes',
      required: true,
      gridColumns: 5,
      placeholder: 'Código do processo',
    },
    {
      label: 'Descrição',
      property: 'description',
      required: true,
      gridColumns: 5,
      placeholder: 'descrição',
    },
    {
      label: 'Número Pagto',
      property: 'numpag',
      required: true,
      gridColumns: 5,
      placeholder: 'Número Pagto.',
    },
    {
      label: 'Data Início',
      property: 'dtini',
      required: true,
      gridColumns: 5,
      placeholder: 'Data Inicio',
    }
  ]

  constructor(
    private notificationService: PoNotificationService,
    private service: PeriodosService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];

  }

  saveNew(): void {

  }

  onCancelClick(): void {
    this.location.back();
  }

  onSaveClick(): void {
    this.isBusy = true;
    this.save(this.dynamicForm.form.value)
      .subscribe({
        next: () => {
          this.notificationService.success('Grupo salvo com sucesso');
          this.router.navigate(["groups"]);
        },
        error: err => this.isBusy = false,
        complete: () => this.isBusy = false
      });
    }


  private save(data: any): Observable<any> {
    if (this.editMode)
      return this.service.update(data);
    return this.service.save(data);
  }

}

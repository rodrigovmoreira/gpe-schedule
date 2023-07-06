import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { HomeService } from '../shared/services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardValues: any = ''
  public date: any = ''
  paymentLink: string = 'https://www.google.com.br/search?q=dias+para+o+pagamento';

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }]
  };

  constructor(
    private HomeService: HomeService,
    private _http: HttpClient
  ) { }

  getTesteAPI() {

    return this._http
    .get('http://127.0.0.1:8080/rest/api/v1/periodos/processes')
    .subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit(): void {
    this.getCardValue()
  }

  getCardValue() {
    this.HomeService.getData().subscribe((res) => {
      this.cardValues = res
      this.date = this.cardValues.items[0].data
      let [ano, mes, dia] = this.date.match(/(\d{4})(\d{2})(\d{2})/).slice(1, 6)
      let dataFormatada = `${ano}-${mes}-${dia}`
      this.date = new Date(dataFormatada)
    })
  }

  diasPagamento() {
    window.open(this.paymentLink, '_blank');
  }

}

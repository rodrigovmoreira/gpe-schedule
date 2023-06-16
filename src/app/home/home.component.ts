import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardValues: any = ''
  public date: any = ''


  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }]
  };

  readonly pageActions: Array<PoPageAction> = [

  ];

  constructor(
    private HomeService: HomeService
  ) { }

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

}

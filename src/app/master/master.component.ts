import { Component } from '@angular/core';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})

export class MasterComponent  {

  details: Array<Detail> = [{id: 1, value: 'Apples'},
                            {id: 2, value: 'Oranges'},
                            {id: 3, value: 'Pears'}
                          ];
  headers: Array<string> = ['id', 'value'];

  selectedDetail: Detail = new Detail();
  childMessage: String  = null;

  private onDetailSelect(detail: Detail) {

    this.selectedDetail = detail;

  }

  private onDetailDispatched (detail: Detail) {

    this.childMessage = ' {id: ' + detail.id + ', value: ' + detail.value +  '} was clicked in Child Component';

  }

}



                // (stockValueChange)='changeStockValue($event)'



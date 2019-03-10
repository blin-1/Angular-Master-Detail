import { Component } from '@angular/core';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})

export class MasterComponent  {

  details: Array<Detail> = [{id: 1, value: 'row1'},
                            {id: 2, value: 'row2'},
                            {id: 3, value: 'row3'}
                          ];
  headers: Array<string> = ['id', 'value'];

  selectedDetail: Detail = new Detail();

  onSelect(detail: Detail) {

    this.selectedDetail = detail;

  }
}

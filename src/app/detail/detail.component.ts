import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-detail',
  template: 'Selected in Parent Component' +
            '<br>' +
            'id: {{detail.id}} <br>' +
            'value: {{detail.value}}' +
            '<br><br>' +
            '<button (click)="onSelect(detail)"> Send this to Parent </button>'
})
export class DetailComponent {

  @Input()  detail: Detail;
  @Output() detailDispatched: EventEmitter <Detail> = new EventEmitter();

  private onSelect (detail: Detail) {
    this.detailDispatched.emit(detail);
  }
}

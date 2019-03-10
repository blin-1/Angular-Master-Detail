import { Component, Input } from '@angular/core';
import { Detail } from 'src/app/models/detail';

@Component({
  selector: 'app-detail',
  template: 'id: {{detail.id}} <br> value: {{detail.value}}'
})
export class DetailComponent {

  @Input() detail: Detail;

}

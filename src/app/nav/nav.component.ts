import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() sendId = new EventEmitter();

  getId(num: number) {
    this.sendId.emit(num);
  }
}

// Pastikan        [EventEmitter]      dan      [Output]
//                                 di-import dari              [@angular/core]!
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() onEventTrigger = new EventEmitter()
  @Input() name = ''

  constructor() { }

  ngOnInit(): void {
  }

  // event handlers

  emitEvent() {
    this.onEventTrigger.emit()
  }

}

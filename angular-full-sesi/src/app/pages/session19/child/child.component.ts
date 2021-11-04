import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // Gunakan ini hanya pada children component!

  // @Input  --> Terima data yang di-pass dari parent ke child,
  //             yang "dibuka" sebagai <tag [attribute]="value"></tag>
  @Input() message = ''
  @Input() counter = 0

  // @Output --> Lempar event dari child ke parent
  //             yang "dibuka" sebagai berikut
  //             <tag (event)="handler()"></tag>

  //             Gunakan EventEmitter berbarengan dengan @Output!
  @Output() triggerCounter = new EventEmitter()
  @Output() triggerChangeMessage = new EventEmitter()

  // event handlers

  count () {
    // emit() dari EventEmitter akan digunakan untuk men-trigger
    // event dari child component kepada parent component
    this.triggerCounter.emit()
  }

  changeMessage () {
    this.triggerChangeMessage.emit()
  }

}

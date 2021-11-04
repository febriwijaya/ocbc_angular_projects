import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-emulated',
  templateUrl: './view-encapsulation-emulated.component.html',
  styleUrls: ['./view-encapsulation-emulated.component.css'],
  // Kita tidak perlu explicit untuk set encapsulation sebagai emulated,
  // karena sudah by default di-set sebagai emulated.
  // Namun, jika diperlukan, maka kita bisa lakukan:
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

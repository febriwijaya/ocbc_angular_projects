import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  templateUrl: './view-encapsulation-none.component.html',
  styleUrls: ['./view-encapsulation-none.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-shadow-dom',
  templateUrl: './view-encapsulation-shadow-dom.component.html',
  styleUrls: ['./view-encapsulation-shadow-dom.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

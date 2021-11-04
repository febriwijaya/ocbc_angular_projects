import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session21',
  templateUrl: './session21.component.html',
  styleUrls: ['./session21.component.css']
})
export class Session21Component implements OnInit {

  name: string = 'Budi'
  numbers: number[] = [
    12,
    21
  ]

  constructor() { }

  changeName(): void {
    this.name = 'Anto'
  }

  ngOnInit(): void {
  }

}

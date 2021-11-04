import { Component, OnInit } from '@angular/core';
import { Person } from './types/person';
@Component({
  selector: 'app-session22',
  templateUrl: './session22.component.html',
  styleUrls: ['./session22.component.css']
})
export class Session22Component implements OnInit {

  constructor() { }

  currentDate: Date = {} as Date;

  person: Person = {} as Person

  ngOnInit(): void {
    this.currentDate = new Date()
    this.person = {
      name: "Budi",
      age: 21,
      role: "Full-stack developer"
    };
  }

}

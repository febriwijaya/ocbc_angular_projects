import { Component, Input, OnInit } from '@angular/core';
import { CountryFilled } from 'src/app/models/CountryFilled';
import { Router, ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends CountryFilled implements OnInit {
  @Input()
  index?: number;
  constructor(public router: Router) {
    super();
  }

  onButtonClick(index: number) {
    this.index = index;
    console.log(this.index);
    this.router.navigate(['country-detail', index]);
  }

  get Details() {
    return this.index;
  }

  sortPopulation() {
    this.countryFilled.sort((n1, n2) => {
      if (n1.population < n2.population) {
        return 1;
      }
      if (n1.population > n2.population) {
        return -1;
      }
      return 0;
    });
  }

  sortArea() {
    this.countryFilled.sort((n1, n2) => {
      if (n1.area < n2.area) {
        return 1;
      }
      if (n1.area > n2.area) {
        return -1;
      }
      return 0;
    });
  }

  ngOnInit(): void {
    AOS.init();
  }
}

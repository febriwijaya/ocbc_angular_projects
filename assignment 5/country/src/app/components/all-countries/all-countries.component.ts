import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryFilled } from 'src/app/models/CountryFilled';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent extends CountryFilled {
  @Input()
  index?: number;
  constructor(public router: Router, private route: ActivatedRoute, private location: Location,){
    super();
  }

  onButtonClick(index: number){
    this.index=index;
    console.log(this.index);
    this.router.navigate(['country-detail', index]);
  }

}

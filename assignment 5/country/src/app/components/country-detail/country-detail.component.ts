import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CountryFilled } from 'src/app/models/CountryFilled';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent extends CountryFilled {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    super();
  }

  idCountry?: number;

  ngOnInit(): void {
    this.idCountry=this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params)

  }
}

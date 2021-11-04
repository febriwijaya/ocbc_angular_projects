import { Component, OnInit } from '@angular/core';
import { Studio } from 'src/app/models/Studio';
import { StudioService } from 'src/app/services/studio.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  studios: Studio[] = [];

  constructor(
    private studioService: StudioService
  ) { }

  ngOnInit(): void {
    this.studioService
    .getStudios()
    .subscribe((res: any) => {
      if(res) this.studios = res
    })
  }

}

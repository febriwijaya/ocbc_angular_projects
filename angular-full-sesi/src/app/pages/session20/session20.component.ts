import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session20',
  templateUrl: './session20.component.html',
  styleUrls: ['./session20.component.css']
})
export class Session20Component implements OnInit {

  constructor() { }

  baseName: string = 'Session 20'

  logs: string[] = []

  childComponentState: boolean = false;

  // Functions

  // Small practice:
  // -------------------------------------------------------------------
  // Apa yang bisa kita lakukan untuk mengoptimalkan kedua function ini?
  hideComponent () {
    this.childComponentState = false
  }

  showComponent () {
    this.childComponentState = true
  }
  // -------------------------------------------------------------------

  appendLog (log: string) {
    this.logs.push([new Date(), log].join(' - '))
    this.logs.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

    console.log(log)
  }


  // Hooks

  ngOnChanges(): void {
    this.appendLog(`${this.baseName} - Ada perubahan yang dapat dibaca oleh Angular`)
  }

  ngOnInit(): void {
    this.appendLog(`${this.baseName} - Component sedang dibuat`)
  }

  ngDoCheck(): void {
    this.appendLog(`${this.baseName} - Ada perubahan pada component ini`)
  }

  ngOnDestroy(): void {
    // Note: ketika ngOnDestroy di-trigger, kalian hanya dapat melihatnya pada
    //       console, karena component-nya akan di-destroy di tahap ini
    this.appendLog(`${this.baseName} - Component ini akan di-destroy`)
  }

}

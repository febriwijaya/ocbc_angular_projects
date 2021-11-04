import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-data-binding',
  templateUrl: './angular-data-binding.component.html',
  styleUrls: ['./angular-data-binding.component.css']
})
export class AngularDataBindingComponent implements OnInit {

  @Output() eventTrigger = new EventEmitter<string>()

  constructor() { }

  baseName: string = 'Child Component - Angular Data Binding'
  name: string = ''
  isSubmitted: boolean = false

  // Functions

  toggleSubmitted () {
    this.isSubmitted = !this.isSubmitted
  }


  // Hooks

  ngOnChanges(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada perubahan yang dapat dibaca oleh Angular`)
  }

  ngOnInit(): void {
    this.eventTrigger.emit(`${this.baseName} - Component sedang dibuat`)
  }

  ngDoCheck(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada perubahan pada component ini`)
  }

  ngOnContentInit(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada child component terbentuk di component ini`)
  }

  ngOnContentChecked(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada child component baru dibentuk, diperiksa di component ini`)
  }

  ngOnViewInit(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada child component di-mount di component ini`)
  }

  ngOnViewChecked(): void {
    this.eventTrigger.emit(`${this.baseName} - Ada child component baru di-mount, diperiksa di component ini`)
  }

  ngOnDestroy(): void {
    this.eventTrigger.emit(`${this.baseName} - Component ini akan di-destroy`)
  }

}

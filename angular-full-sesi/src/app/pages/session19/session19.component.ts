import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session19',
  templateUrl: './session19.component.html',
  styleUrls: ['./session19.component.css']
})
export class Session19Component implements OnInit {

  // saya siapkan 2 property dari parent, lalu akan dilempar
  // setiap value-nya ke ChildComponent

  // Perhatikan panah dari alur passing data!

  //    parentCounter
  //          |
  //    parentMessage           name                 passing prop value
  //          |                  |
  // Parent ---> ChildComponent ---> ButtonComponent
  //                    |                   |
  //                 counter               name      property
  //                    |
  //                 message
  parentCounter = 0
  parentMessage = 'Hi! I am your parent'

  constructor() { }

  ngOnInit(): void { }

  // event handlers

  // saya juga siapkan 2 event handler, yang satu untuk
  // mengubah pesan, yang satunya lagi adalah untuk
  // menambah counter dengan 1

  // Perhatikan panah dari alur event handler!

  //     lempar event       lempar event
  // Parent <--- ChildComponent <--- ButtonComponent

  changeMessageOnParent () {
    this.parentMessage = "Hi! Am I your child?"
  }

  changeCounterOnParent () {
    this.parentCounter++
  }

  // BONUS

  // Untuk memudahkan kalian dalam meng-handle properties,
  // Angular memiliki (3rd party) state management bernama NgRx,
  // di mana NgRx ini akan meng-handle semua state agar dapat
  // digunakan berkali-kali

  // NOTE: NgRx berbeda dengan RxJS yang kita pelajari di sini,
  //       perhatikan bedanya di link berikut (VPN diperlukan):
  //       https://www.reddit.com/r/angular/comments/f7vuvs/difference_between_rxjs_and_ngrx/

  // Tl;dr: NgRx adalah implementasi Redux dalam Angular, dengan menggunakan
  //        built-in library RxJS

  // Referensi lain: https://youtu.be/8aGhZQkoFbQ
}

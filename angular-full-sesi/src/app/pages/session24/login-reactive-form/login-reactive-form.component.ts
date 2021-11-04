import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
})
export class LoginReactiveFormComponent {

  // app states

  loggedIn = false
  userData: any = {}

  // form states

  // saya kelompokkan form menjadi satu property
  // yang di dalamnya terdapat semua yang berhubungan
  // dengan form pada component

  // sangat disarankan untuk kalian kelompokkan
  // form seperti ini, kecuali jika ada coding guideline
  // yang sudah ditentukan oleh tim di tempat kalian bekerja

  form: {
    // penentuan type seperti ini optional,
    // tapi disarankan agar kalian tidak dihadapi oleh bug
    // karena type yang berbeda
    inputData: FormGroup
    submitted: boolean
    errors: any
  } = {
    // berisi FormGroup, di dalamnya terdapat
    // kumpulan FormControl.
    inputData: new FormGroup({
      // Parameter FormControl dapat kita isi dengan:
      // - default state value (wajib), dan
      // - validators (array, optional)
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    }),
    // state yang akan me-monitor form sudah di-submit
    // oleh user, atau tidak (karena ada perubahan data --
    // perhatikan event listener di <input> pada
    // component template!)
    submitted: false,
    errors: {}
  }

  // setters and getters

  get username () {
    return this.form.inputData.get('username')
  }

  get password () {
    return this.form.inputData.get('password')
  }

  // functions

  validateForm () {
    if(this.username?.errors)
      this.form.errors.username = { ...this.username?.errors }
    else
      delete this.form.errors.username

    // optional: validasi password
    // jika diperlukan, akan memeriksa apakah password
    // sudah terisi atau belum
    if(this.password?.errors)
      this.form.errors.password = { ...this.password?.errors }
    else
      delete this.form.errors.password
  }

  // event handlers

  handleLoginForm () {
    this.toggleFormState(true)

    this.validateForm()

    // Jika tidak ada error, maka jalankan perintah ini
    if(Object.keys(this.form.errors).length === 0) {
      this.userData.name = this.username?.value

      this.loggedIn = true

      // Reset input
      // ada 2 cara me-reset input:
      // reset seluruh input pada form
      this.form.inputData.reset()
      // atau reset input tertentu pada form
      // this.username?.reset()
      // this.password?.reset()
      // NOTE: dengan cara ini, jangan lupa beri tanda ? setelah getter
    }
  }

  toggleFormState (state: boolean) {
      this.form.submitted = state
  }

  logout () {
    delete this.userData.name
    this.loggedIn = false
  }
}

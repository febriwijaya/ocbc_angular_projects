import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// Gunakan model untuk membantu guide kalian
// ketika men-develop sebuah data terstruktur
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
})
export class TemplateDrivenFormComponent {
  // app states

  categories: string[] = [
    'Shopping',
    'Work',
    'Education',
    'Financing'
  ];

  // dari model yang di-import, terapkan sebagai type
  // pada property, seperti contoh berikut

  // NOTE: Class bisa kita jadikan sebagai type ya!
  tasks: Task[] = []

  // event handler(s)

  handleFormOnSubmit (form: NgForm) {
    const { taskName, category } = form.value

    this.tasks.push(new Task(taskName, "incomplete", category))

    form.reset()
  }

}

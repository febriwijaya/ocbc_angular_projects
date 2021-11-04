import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css'],
})
export class AddTodoFormComponent {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = '';

  constructor() {}

  todoData = new FormGroup({
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
  });

  handleTodoForm() {
    const todo: Todo = {
      content: this.inputTodo,
      completed: false,
      edit: false,
    };

    if (this.inputTodo != '') {
      this.newTodoEvent.emit(todo);
    } else {
      this.inputTodo = '';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Kontent Tidak Boleh Kosong!',
      });
    }
    
    console.log(this.todoData.get('content'));
  }

  get content() {
    return this.todoData.get('content');
  }
}

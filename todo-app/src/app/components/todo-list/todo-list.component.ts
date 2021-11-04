import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/Todo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  @Output() newTodoEvent = new EventEmitter<Todo>();
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
        edit: false,
      },
      {
        content: 'Second todo',
        completed: false,
        edit: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      console.log(v);
      return v;
    });
  }

  deleteTodo(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.todos = this.todos.filter((v, i) => i !== id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  editTodo(todo: Todo) {
    todo.edit = true;
  }

  editSaveTodo(todo: Todo) {
    if (todo.content != '') {
      todo.content = this.inputTodo;
      todo.completed = false;
      todo.edit = false;
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Anda berhasil edit data!',
      });
      this.inputTodo = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oopss',
        text: 'Data anda kosong!',
      });
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Anda berhasil Menambah data!',
      });
  }
}

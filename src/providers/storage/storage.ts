import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Todo model
import { Todo } from './../../models/todo';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClientModule) { }

  createTodo(id: number, todo: Todo) {
    let todoList = [];
    if(!window.localStorage.getItem("todos")){
      window.localStorage.setItem("todos", JSON.stringify(todoList));
    } else {
      var todoListStorage = JSON.parse(window.localStorage.getItem("todos"));
      todoList = todoListStorage;
    }
    todoList.push(todo);
    var todoJSON = JSON.stringify(todoList);
    window.localStorage.setItem('todos', todoJSON);
  }

  getTodos(key) {
    if(window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      return [];
    }
  }

  saveTodos(todosList) {
    window.localStorage.setItem('todos', JSON.stringify(todosList));
  }

  deleteTodo(index) {
    let todoListStorage = JSON.parse(window.localStorage.getItem("todos"));
    todoListStorage.splice(index, 1);
    this.saveTodos(todoListStorage);
  }

}

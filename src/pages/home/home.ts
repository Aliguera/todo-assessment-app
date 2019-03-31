import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CreateTodoPage } from '../create-todo/create-todo';

//Providers
import { StorageProvider } from './../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList: any = [];
  todoDoneList: any = [];
  allTodos: any = [];

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private storageProvider: StorageProvider) {

  }

  ionViewWillEnter(){
    this.getTodos();
  }

  //Open modal to create a todo
  createTodo() {
    const modal = this.modalCtrl.create(CreateTodoPage);

    modal.present();
    
    modal.onDidDismiss(() => {
      this.getTodos();
    });
  }

  //Get todos from storage
  getTodos() {
    let allTodos: any = this.storageProvider.getTodos("todos");
    this.allTodos = allTodos;
    this.todoList = [];
    this.todoDoneList = [];
    allTodos.forEach(todo => {
      if(todo.done) {
        this.todoDoneList.push(todo);
      } else {
        this.todoList.push(todo);
      }
    });
  }

  //Save todos
  saveTodos(todos) {
    this.storageProvider.saveTodos(todos);
  }

  //Togle todo done variable for todos list
  toggleTodo(index) {
    this.todoList[index].done = !this.todoList[index].done;
    let concatTodos = this.todoList.concat(this.todoDoneList);
    this.saveTodos(concatTodos);
    this.getTodos();
  }

  //Togle todo done variable for todos done list
  toggleTodoDone(index) {
    this.todoDoneList[index].done = !this.todoDoneList[index].done;
    let concatTodos = this.todoList.concat(this.todoDoneList);
    this.saveTodos(concatTodos);
    this.getTodos();
  }

  //Dele todo done item
  deleteTodo(index) {
    this.todoDoneList.splice(index, 1);
    let concatTodos = this.todoList.concat(this.todoDoneList);
    this.saveTodos(concatTodos);
    this.getTodos();
  }

}

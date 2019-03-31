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
    let allTodos: any = this.storageProvider.getTodos();
    this.todoList = allTodos.todoUndoneList;
    this.todoDoneList = allTodos.todoDoneList;
  }

  //Save todos
  saveTodos(todos) {
    this.storageProvider.saveTodos(todos);
  }

  toggleTodoDone(i) {
    this.todoList[i].done = true;
    this.saveTodos(this.todoList);
    this.getTodos();
  }

}

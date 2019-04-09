import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

//Pages
import { CreateTodoPage } from '../create-todo/create-todo';
import { TodoDetailsPage } from './../todo-details/todo-details';

//Providers
import { StorageProvider } from './../../providers/storage/storage';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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
              private storageProvider: StorageProvider,
              private alertCtrl: AlertController) {

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

  presentAlert(index) {
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      subTitle: 'If you tap Ok you will not be able to see this Todo again',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return;
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.deleteTodo(index);
          }
        }
      ]
    });
    alert.present();
  }

  seeTodoDetails(index, list) {
    var data;
    console.log("List type: ", list);

    if (list === "todoList") {
      data = this.todoList[index];
    } else {
      data = this.todoDoneList[index];
    }

    this.navCtrl.push(TodoDetailsPage, {data:data});
    
  }

}

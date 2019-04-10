import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

//Import todo model
import { Todo } from './../../models/todo';

//Prividers
import { StorageProvider } from './../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-create-todo',
  templateUrl: 'create-todo.html',
})
export class CreateTodoPage {
  todo: Todo = {id: new Date().getTime(), name: "", description: "", date: new Date(), done: false};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storageProvider: StorageProvider,
              public viewCtrl: ViewController) {
  }

  createTodo() {
    this.todo.date = this.formatDate(this.todo.date);
    this.storageProvider.createTodo(this.todo.id, this.todo);
    this.viewCtrl.dismiss();
  }

  closeCreateTodoModal() {
    this.viewCtrl.dismiss();
  }

  formatDate(inputDate) {
    let date = new Date(inputDate);
    let day:any = date.getDate();
    let month:any = date.getMonth() + 1;

    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();

    let time = hours + ":" + minutes;

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    return {date: day + '/' + month + '/' + date.getFullYear(), time: time};
  }

}

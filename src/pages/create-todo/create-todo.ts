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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTodoPage');
  }

  createTodo() {
    this.storageProvider.createTodo(this.todo.id, this.todo);
    this.viewCtrl.dismiss();
  }

  closeCreateTodoModal() {
    this.viewCtrl.dismiss();
  }

}

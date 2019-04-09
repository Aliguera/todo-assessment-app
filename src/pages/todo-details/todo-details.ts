import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Models
import { Todo } from './../../models/todo';

@IonicPage()
@Component({
  selector: 'page-todo-details',
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.todo = this.navParams.get('data');
    console.log(this.todo);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CreateTodoPage } from '../create-todo/create-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList: any = [{name: "todo1"}, {name: "todo2"}];

  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController) {

  }

  createTodo() {
    const modal = this.modalCtrl.create(CreateTodoPage);

    modal.present();
    
    modal.onDidDismiss(() => {
      console.log("aee");
    });
  }

}

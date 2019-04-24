import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

//Import todo model
import { Todo } from './../../models/todo';

//Prividers
import { StorageProvider } from './../../providers/storage/storage';

//Native
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-create-todo',
  templateUrl: 'create-todo.html',
})
export class CreateTodoPage {
  todo: Todo = {id: new Date().getTime(), name: "", description: "", date: "", done: false, position: {}};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storageProvider: StorageProvider,
              public viewCtrl: ViewController,
              public geolocation: Geolocation,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
  }

  createTodo() {
    if (!this.todo.name) {
      this.presentAlert('Error', 'You have to insert at least a name for the todo before creating one');
      return;
    }

    if (this.todo.date !== "") {
      this.todo.date = this.formatDate(this.todo.date);
    }

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

  getCurrentPosition() {
    let positionLoader = this.loadingCtrl.create({
      content: 'Loading your current position...'
    });
    positionLoader.present();
    this.geolocation.getCurrentPosition().then(
      res => {
        this.todo.position = {lat: res.coords.latitude, long: res.coords.longitude};
        positionLoader.dismiss();
        this.presentAlert('Location', 'Location saved');
      },
      err => {
        console.log("Error getting your position: ", err);
      }
    );
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}

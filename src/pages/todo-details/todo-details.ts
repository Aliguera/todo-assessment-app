import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Models
import { Todo } from './../../models/todo';

//Native
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-todo-details',
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo: any = {date: {}, position: {lat: "", long: ""}};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public geo: Geolocation,
              public launchNavigator: LaunchNavigator) {
  }

  ionViewWillEnter(){
    this.todo = this.navParams.get('data');
    console.log(this.todo.position);
  }

  loadGoogleMaps() {
    this.geo.getCurrentPosition().then(resp => {
      let startPosition = [resp.coords.latitude, resp.coords.longitude];
      this.launchNavigator.navigate([this.todo.position.lat, this.todo.position.long], {
        start: startPosition
      });
    }).catch((err) => {
      console.log("Error getting your position: ", err); //error in case position is not found
    });
  }

}

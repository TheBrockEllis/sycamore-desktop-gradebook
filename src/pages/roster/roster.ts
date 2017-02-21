import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
/*
  Generated class for the Roster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})
export class Roster {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RosterPage');
  }

  navigateToDashboard(){
    this.app.getRootNav().setRoot(Dashboard);
  }

}

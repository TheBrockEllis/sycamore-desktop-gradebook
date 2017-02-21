import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html'
})
export class Grades {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradesPage');
  }

  navigateToDashboard(){
    this.app.getRootNav().setRoot(Dashboard);
  }
}

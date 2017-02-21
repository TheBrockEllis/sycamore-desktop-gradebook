import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class Attendance {

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  navigateToDashboard(){
    this.app.getRootNav().setRoot(Dashboard);
  }
}

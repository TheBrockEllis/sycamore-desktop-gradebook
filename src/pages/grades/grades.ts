import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html'
})
export class Grades {
  public assignments:any = [
    {
        "ID": 2243171,
        "GroupID": 0,
        "CategoryID": 90343,
        "Title": "macbeth essay",
        "Status": 2,
        "SubjectID": 20509,
        "Subject": "English",
        "Quarter": 3,
        "Dropbox": 0,
        "DueDate": "11/04/2013"
    },
    {
        "ID": 2618209,
        "GroupID": 0,
        "CategoryID": 90343,
        "Title": "Assign 1",
        "Status": 3,
        "SubjectID": 20509,
        "Subject": "English",
        "Quarter": 3,
        "Dropbox": 0,
        "DueDate": "02/09/2015"
    },
    {
        "ID": 2618215,
        "GroupID": 0,
        "CategoryID": 116788,
        "Title": "Assign 2",
        "Status": 3,
        "SubjectID": 20509,
        "Subject": "English",
        "Quarter": 3,
        "Dropbox": 0,
        "DueDate": "02/09/2014"
    }
  ]

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradesPage');
  }

  navigateToDashboard(){
    this.app.getRootNav().setRoot(Dashboard);
  }
}

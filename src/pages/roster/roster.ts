import { Component } from '@angular/core';
import { App, NavController, NavParams, ModalController } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { StudentModal } from '../student/student';

@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html'
})
export class Roster {
  public students:any = [
    {
      "ID": "267278",
      "Code": "BAG1460-5",
      "ClassNumber": "0",
      "FirstName": "Flower",
      "LastName": "Baggins",
      "NickName": "tex"
    },
    {
      "ID": "493423",
      "Code": "CLA1536-6",
      "ClassNumber": "0",
      "FirstName": "Sam",
      "LastName": "Clark",
      "NickName": ""
    },
    {
      "ID": "614085",
      "Code": "ELL1727-1",
      "ClassNumber": "0",
      "FirstName": "Ansleigh",
      "LastName": "Ellis",
      "NickName": ""
    },
    {
      "ID": "446",
      "Code": "SAF1088-1",
      "ClassNumber": "0",
      "FirstName": "Alfred",
      "LastName": "Saferite",
      "NickName": ""
    },
    {
      "ID": "89356",
      "Code": "BAL1100-6",
      "ClassNumber": "0",
      "FirstName": "Sam",
      "LastName": "Wombat",
      "NickName": ""
    }
  ];

  constructor(public app:App, public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RosterPage');
    // get the students here and stuff
  }

  viewStudent(student){
    let modal = this.modalCtrl.create(StudentModal);
    modal.present();
  }

  navigateToDashboard(){
    this.app.getRootNav().setRoot(Dashboard);
  }

}

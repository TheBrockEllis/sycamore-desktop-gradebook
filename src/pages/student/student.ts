import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-student',
  templateUrl: 'student.html'
})
export class StudentModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentModal');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

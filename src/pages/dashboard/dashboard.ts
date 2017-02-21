import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { ClassHome } from '../class-home/class-home';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  public classrooms: Object[] = [
    {
      id: 1,
      title: "Class One",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: "#9400D3"
    },
    {
      id: 2,
      title: "Class Two",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: "#4B0082"
    },
    {
      id: 3,
      title: "Class Three",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#0000FF'
    },
    {
      id: 4,
      title: "Class Four",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#00FF00'
    },
    {
      id: 5,
      title: "Class Five",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#FFFF00'
    },
    {
      id: 6,
      title: "Class Six",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#FF7F00'
    },
    {
      id: 7,
      title: "Class Seven",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#FF0000'
    }
  ]

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {
  }

  /*
   * $event.stopPropagation() is needed because the buttons are nested inside
   * of a card that can ALSO be clicked on to take them to the ClassHome
   */
  navigateToRoster($event, classroom){
    $event.stopPropagation();
    this.navCtrl.push(ClassHome, { tab: 0, classroom: classroom });
  }

  navigateToGrades($event, classroom){
    $event.stopPropagation();
    this.navCtrl.push(ClassHome, { tab: 1, classroom: classroom });
  }

  navigateToAttendance($event, classroom){
    $event.stopPropagation();
    this.navCtrl.push(ClassHome, { tab: 2, classroom: classroom });
  }

  viewClass(classroom){
    //console.log("Trying to view class: ", classroom);
    this.navCtrl.push(ClassHome, { classroom: classroom });
  }

}

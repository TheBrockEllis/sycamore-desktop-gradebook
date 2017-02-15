import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { Grades } from '../grades/grades';
import { Attendance } from '../attendance/attendance';
import { Roster } from '../roster/roster';

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
      color: "#b23"
    },
    {
      id: 2,
      title: "Class Two",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: "#D00"
    },
    {
      id: 3,
      title: "Class Three",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#a01'
    },
    {
      id: 4,
      title: "Class Four",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#F1A'
    },
    {
      id: 5,
      title: "Class Five",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#B0B'
    },
    {
      id: 6,
      title: "Class Six",
      image: "http://www.lorempixel.com/200/200/sports",
      description: "A fine classroom teaching amazing things",
      section: '1A',
      homeroom: true,
      color: '#D1C'
    },

  ]

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {
    //this.menuCtrl.open('left');
  }

  navigateToAttendance(classroom){
    this.navCtrl.push(Attendance, { classroom: classroom })
  }

  navigateToRoster(classroom){
    this.navCtrl.push(Roster, { classroom: classroom })
  }

  navigateToGrades(classroom){
    this.navCtrl.push(Grades, { classroom: classroom })
  }

}

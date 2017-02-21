import { Component, ViewChild } from '@angular/core';

import { NavParams, NavController, Tabs } from 'ionic-angular';
import { Attendance } from '../attendance/attendance';
import { Roster } from '../roster/roster';
import { Grades } from '../grades/grades';

@Component({
  template: `
    <ion-tabs #classTabs color="primary">
      <ion-tab tabIcon="people" tabTitle="Roster" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="book" tabTitle="Grades" [root]="tab2"></ion-tab>
      <ion-tab tabIcon="hand" tabTitle="Attendance" [root]="tab3"></ion-tab>
    </ion-tabs>`
})
export class ClassHome {
  @ViewChild('classTabs') tabRef:Tabs;

  tab1: any;
  tab2: any;
  tab3: any;
  public tab:number = 1;
  public classroom:any = {
    "ID": "58418",
    "SharedClassID": "0",
    "Name": "3rd Grade - Thompson",
    "Section": "002",
    "Description": "Third grade class",
    "DepartmentID": "103",
    "CategoryID": "0",
    "HomeRoom": "1",
    "PeriodID": "0",
    "PrimaryStaffID": "87585",
    "Public": "1",
    "ParentAccess": "1",
    "PrimaryTeacher": "Brock O'Ellis",
    "Department": "Elementary",
    "TermLength": "Full Year",
    "Facility": {
      "ID": "672",
      "Name": "English",
      "Number": "142"
    },
    "Location": {
      "ID": "708",
      "Name": "Main Campus",
      "Number": "0"
    },
    "Teachers": [
      {
          "ID": "83171",
          "FirstName": "Billy",
          "LastName": "Bob",
          "GoesBy": "",
          "ClassStatus": "OnLine"
      },
      {
          "ID": "87585",
          "FirstName": "Brock",
          "LastName": "O'Ellis",
          "GoesBy": "brock@",
          "ClassStatus": "Classroom"
      },
      {
          "ID": "290458",
          "FirstName": "Michael",
          "LastName": "Rebello",
          "GoesBy": "",
          "ClassStatus": "OnLine"
      },
      {
          "ID": "237889",
          "FirstName": "Lucas",
          "LastName": "Skywalker",
          "GoesBy": "Luke",
          "ClassStatus": "OnLine"
      },
      {
          "ID": "68",
          "FirstName": "Jenna",
          "LastName": "Thompson",
          "GoesBy": "",
          "ClassStatus": ""
      }
    ],
    "Gradebook": {
        "Subjects": [
            {
                "ID": "56267",
                "Name": "Accelerated Reader",
                "Description": ""
            },
            {
                "ID": "69390",
                "Name": "New's Keepers",
                "Description": "Uptodate on the latest news around the world"
            },
            {
                "ID": "20509",
                "Name": "English",
                "Description": ""
            },
            {
                "ID": "48695",
                "Name": "Math",
                "Description": ""
            },
            {
                "ID": "20510",
                "Name": "World Society",
                "Description": ""
            },
            {
                "ID": "55746",
                "Name": "Integers/Rational Numbers",
                "Description": ""
            }
        ],
        "Categories": [
            {
                "ID": "90343",
                "Name": "Assignments",
                "Percentage": "80"
            },
            {
                "ID": "116788",
                "Name": "Test",
                "Percentage": "10"
            },
            {
                "ID": "329581",
                "Name": "Participation",
                "Percentage": "10"
            }
        ],
        "Groups": [
            {
                "ID": "31958",
                "Name": "TTC",
                "Description": "A Tale of Two Cities"
            },
            {
                "ID": "31959",
                "Name": "Hound",
                "Description": "Hound of the Baskervilles"
            }
        ]
    }
  }

  constructor(public navCtrl:NavController, public params:NavParams) {
    this.tab1 = Roster;
    this.tab2 = Grades;
    this.tab3 = Attendance;
  }

  ionViewDidLoad(){
    this.tab = this.params.get('tab');
    //console.log("trying to get to tab ", this.tab);
    this.tabRef.select(this.tab);
  }
}

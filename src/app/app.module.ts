import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Dashboard } from '../pages/dashboard/dashboard';
import { ClassHome } from '../pages/class-home/class-home';
import { Grades } from '../pages/grades/grades';
import { Attendance } from '../pages/attendance/attendance';
import { Roster } from '../pages/roster/roster';
import { StudentModal } from '../pages/student/student';

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    ClassHome,
    Grades,
    Attendance,
    Roster,
    StudentModal
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
       backButtonText: 'Back',
       modalEnter: 'modal-slide-in',
       modalLeave: 'modal-slide-out',
       tabsPlacement: 'bottom',
       tabsHighlight: true,
       tabsHideOnSubPages: true
     }, {}
   )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    ClassHome,
    Grades,
    Attendance,
    Roster,
    StudentModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

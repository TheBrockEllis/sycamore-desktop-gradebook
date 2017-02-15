import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Dashboard } from '../pages/dashboard/dashboard';
import { ClassHome } from '../pages/class-home/class-home';
import { Grades } from '../pages/grades/grades';
import { Attendance } from '../pages/attendance/attendance';
import { Roster } from '../pages/roster/roster';

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    ClassHome,
    Grades,
    Attendance,
    Roster
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    ClassHome,
    Grades,
    Attendance,
    Roster
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Dashboard } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Dashboard;
  me:Object = {
    first: "Brock",
    last: "Ellis",
    profile: "http://www.lorempixel.com/100/100/people",
    school: "Tri-County District School"
  }

  pages: Array<{title:string, component:any, icon:string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: Dashboard, icon: 'analytics'  },
      { title: 'Classes', component: '', icon: 'list' },
      { title: 'Calendar', component: Dashboard, icon: 'calendar' },
      { title: 'Settings', component: Dashboard, icon: 'cog' },
      { title: 'Logout', component: Dashboard, icon: 'log-out' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

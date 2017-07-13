import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private inAppBrowser: InAppBrowser) { }

  open(url) {

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    const browser = this.inAppBrowser.create(url, 'self', options);
  }


}

import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardPage } from '../pages/card/card';
import { SlidesPage } from '../pages/slides/slides';

import { BookService } from '../providers/book_service';

@Component({
  providers: [Keyboard,ScreenOrientation],
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any;

  constructor(
      private bookService: BookService,
      private events: Events,
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      keyboard: Keyboard,
      private screenOrientation: ScreenOrientation) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      keyboard.hideKeyboardAccessoryBar(false);
      keyboard.disableScroll(true);

      this.readBookLocking();
    });

    (<any>window).selectReference= this.selectReference.bind(this);

    events.subscribe('book_type_changed', () => {
      this.readBookType();
    });
    events.subscribe('book_lock_changed', () => {
      this.readBookLocking();
    });
    events.subscribe('book_full_screen_changed', () => {
      this.readBookType();
    });

    this.readBookType();
  }

  selectReference(url:string) {
    window.open(url,'_system', 'location=yes');
  }

  readBookType() {
    switch(this.bookService.getBookType()) {
      case "tabs" : this.rootPage = TabsPage; break;
      case "card" : this.rootPage = CardPage; break;
      case "slides" : this.rootPage = SlidesPage; break;
      default :
      case "menu" : this.rootPage = HomePage; break;
    }
  }
  
    readBookLocking() {
    switch(this.bookService.getLocking()) {
      case "portrait": // portrait
        this.screenOrientation.lock("portrait").catch(function() {});
        break;
      case "landscape": // landscape
        this.screenOrientation.lock("landscape").catch(function() {});
        break;
      default: // nothing
        this.screenOrientation.unlock();
        break;
    }
  }
  
}

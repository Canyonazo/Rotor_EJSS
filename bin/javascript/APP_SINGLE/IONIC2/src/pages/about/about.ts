import { Component } from '@angular/core';
import { NavController, ViewController, Events } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  book : any;
  type: string;
  fullScreen: boolean;
  lockScreen: string;
  isAndroid: boolean;
  isIOS: boolean;

  constructor(public navCtrl: NavController,
      public viewCtrl : ViewController,
      private events : Events,
      private bookService: BookService,
      public platform: Platform) {

	this.isIOS = this.platform.is('ios');
	this.isAndroid = this.platform.is('android');
    this.book = bookService;
    this.type = this.book.getBookType();
    this.fullScreen = this.book.getFullScreen();
    this.lockScreen = this.book.getLocking();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  setBookType() {
    this.closeModal();
    this.bookService.setBookType(this.type);
    this.events.publish('book_type_changed');
  }

  setFullScreen() {
    this.book.setFullScreen(this.fullScreen);
    this.events.publish('book_full_screen_changed');
  }

  setLockScreen() {
    this.book.setLocking(this.lockScreen);
    this.events.publish('book_lock_changed');
  }

  showHeader() {
    if (this.book.isMenuType()) return true;
    if (this.book.isSlidesType()) return true;
    return !this.book.getFullScreen();
  }

  showClose() {
    if (this.book.isMenuType()) return true;
    if (this.book.isSlidesType()) return true;
    return !this.book.getFullScreen();
  }

}

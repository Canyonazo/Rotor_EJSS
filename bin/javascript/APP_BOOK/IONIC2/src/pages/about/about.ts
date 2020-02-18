import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  book : any;
  isAndroid: boolean;
  isIOS: boolean;

  constructor(public navCtrl: NavController,
      public viewCtrl : ViewController,
      private bookService: BookService,
      public platform: Platform) {

	  this.isIOS = this.platform.is('ios');
	  this.isAndroid = this.platform.is('android');
    this.book = bookService;
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

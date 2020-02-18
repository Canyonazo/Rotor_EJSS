import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html'
})
export class ContentsPage {

  book : any;

  constructor(public navCtrl: NavController,
      private bookService: BookService,
      public events: Events) {
    this.book = bookService;
  }

  selectSection(section) {
    this.events.publish('SelectSection',section);
  }

}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ExternalPage } from '../external/external';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})

export class CardPage {
  book : any;
  pages: any;

  constructor(private bookService: BookService,
    private navCtrl: NavController) {
    this.book = bookService;

  	this.pages = [];
    var sections = this.book.getSections();
    var simIndex = this.book.getSimulationIndex();

    for(var i=0, n=sections.length; i<n; i++) {
      var section = sections[i];
      this.pages.push({title: this.book.getSectionTitle(section), icon: "document",
                      root: ExternalPage, params: {section: section}});
    }
    this.pages.push({ title: this.book.getAboutTitle(), icon: "information-circle",
                     root: AboutPage, params: {section: section}});
    this.pages[simIndex].icon = "play";

 }

  itemSelected(page) {
		this.navCtrl.push(page.root,page.params);
  }

}

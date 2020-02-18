import { Component } from '@angular/core';
import { App, ModalController } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { AboutPage } from '../about/about';
import { ExternalPage } from '../external/external';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})

export class SlidesPage {
  book : any;
  intro: any;
  AboutRoot:any = AboutPage;
  ExternalRoot:any = ExternalPage;

  constructor(private bookService: BookService,
    private sanitizer: DomSanitizer,
    private app:App,
    public modalCtrl: ModalController) {

    this.book = bookService;

    this.intro = [];
    var sections = this.book.getSections();
    var simIndex = this.book.getSimulationIndex();

    for(var i=0, n=sections.length; i<n; i++) {
      if (i!=simIndex) {
        var section = sections[i];
        this.intro.push({root: ExternalPage, params: { section: section }});
      }
    }
  }

  showInfo() {
    let dialog = this.modalCtrl.create(AboutPage);
    dialog.present();
  }

  showSimulation() {
    this.app.getRootNav().push(ExternalPage,{section: this.book.getSimulation()});
  }
}

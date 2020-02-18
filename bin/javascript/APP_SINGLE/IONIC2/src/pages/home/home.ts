import { Component, ViewChild } from '@angular/core';
import { Nav, Events, MenuController, ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ExternalPage } from '../external/external';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Nav) nav: Nav;

  book : any;
  currentSectionIndex: number;

  constructor(private bookService: BookService,
      public events: Events,
      public menuCtrl: MenuController,
      public modalCtrl: ModalController) {

    this.book = bookService;

    events.subscribe('SelectSection', (section) => {
      this.selectSection(section);
    });
    events.subscribe('SelectSectionByIndex', (index) => {
      this.selectSection(this.book.getSection(index));
    });
  }

  ionViewDidEnter() {
    if (this.book.getSimulationFirst()) {
      this.selectSection(this.book.getSection(this.book.getSimulationIndex()));
    }
    else this.readLastSection();
  }

  // -------------------
  // Navigation
  // -------------------

    previousSection() {
      var section = this.book.getPreviousSection(this.currentSectionIndex);
      if (section) this.selectSection(section);
    }
    nextSection() {
      var section = this.book.getNextSection(this.currentSectionIndex);
      if (section) this.selectSection(section);
    }

    showInfo() {
      let dialog = this.modalCtrl.create(AboutPage);
      dialog.present();
    }

    // -------------------
    // Navigation
    // -------------------

    selectSection(section) {
      if (section==undefined) section = this.book.getSection(0);
  	  this.nav.setRoot(ExternalPage, { section: section });
      this.menuCtrl.close();
      this.currentSectionIndex = this.book.getSectionIndex(section);
      this.saveCurrentSectionIndex(this.currentSectionIndex);
    }

    readLastSection() {
      var indexStr = window.localStorage['lastActiveSection'];
      if (typeof indexStr == "undefined") {
        this.selectSection(this.book.getTOC());
        return;
      }
      var index = parseInt(indexStr);
      this.selectSection(this.book.getSection(index));
    }

    saveCurrentSectionIndex(index) {
      if (index>=0) window.localStorage['lastActiveSection'] = index;
    }

    isFirstSection() {
      return this.book.isFirstSection(this.currentSectionIndex);
    }

    isLastSection() {
      return this.book.isLastSection(this.currentSectionIndex);
    }

    // -------------------
    // Menu
    // -------------------

    toggleChapter(chapter) {
      if (chapter.expanded) chapter.expanded = false;
      else chapter.expanded = true;
    };

    isChapterExpanded(chapter) {
      return chapter.expanded;
    };


}

import { Component, ViewChild } from '@angular/core';
import { Tabs, NavController, ModalController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ExternalPage } from '../external/external';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  book : any;
  tabs: any;
  currentSectionIndex: number;

  constructor(private bookService: BookService,
    public modalCtrl: ModalController) {

    this.book = bookService;

    this.tabs = [];
    var sections = this.book.getSections();
    var simIndex = this.book.getSimulationIndex();

    for(var i=0, n=sections.length; i<n; i++) {
      var section = sections[i];
      this.tabs.push({title: this.book.getSectionTitle(section), icon: "document",
                      root: ExternalPage, params: {section: section}});
    }
    if (this.book.getFullScreen()) {
      this.tabs.push({ title: this.book.getAboutTitle(), icon: "information-circle",
                     root: AboutPage, params: { section: null } });
    }
    this.tabs[simIndex].icon = "play";
  }

  tabSelected(index: number, tab) {
    this.saveCurrentSectionIndex(index);
  }

  ionViewDidEnter() {
    if (this.book.getSimulationFirst()) {
      this.tabRef.select(this.book.getSimulationIndex());
    }
    else this.readLastSection();
  }

  showInfo() {
    let dialog = this.modalCtrl.create(AboutPage);
    dialog.present();
  }

    // -------------------
    // Navigation
    // -------------------

    readLastSection() {
      var indexStr = window.localStorage['lastActiveSection'];
      if (typeof indexStr == "undefined") {
        this.tabRef.select(0);
        return;
      }
      var index = parseInt(indexStr);
      this.tabRef.select(index);
    }

    saveCurrentSectionIndex(index) {
      if (index>=0) window.localStorage['lastActiveSection'] = index;
    }



}

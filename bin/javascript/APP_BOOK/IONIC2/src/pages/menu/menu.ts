import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { ContentsPage } from '../toc/toc';
import { AboutPage } from '../about/about';
import { ExternalPage } from '../external/external';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-menu',
  providers: [Keyboard,ScreenOrientation],
  templateUrl: 'menu.html'
})

export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  book : any;
  currentSectionIndex: number;

  constructor(public platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private bookService: BookService,
      public events: Events,
      public menuCtrl: MenuController,
      keyboard: Keyboard,
      public modalCtrl: ModalController,
      screenOrientation: ScreenOrientation) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

	    keyboard.hideKeyboardAccessoryBar(false);
	    keyboard.disableScroll(true);

	    // locking screen orientation
	    switch(bookService.getLocking()) {
		    case "portrait": // portrait
		    	screenOrientation.lock("portrait").catch(function() {});
		  	  break;
		    case "landscape": // landscape
			    screenOrientation.lock("landscape").catch(function() {});
			    break;
		    default: // nothing
	    }
    });

    this.book = bookService;

    events.subscribe('SelectSection', (section) => {
      this.selectSection(section);
    });
    events.subscribe('SelectSectionByIndex', (index) => {
      this.selectSection(this.book.getSection(index));
    });
  }

  ngOnInit() {
    this.readLastSection();
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
    if (section.type == "toc") this.nav.setRoot(ContentsPage);
    //else if (section.type == "about") this.nav.setRoot(AboutPage); // Never
	  else this.nav.setRoot(ExternalPage, { section: section });
    this.menuCtrl.close();
    this.currentSectionIndex = this.book.getSectionIndex(section);
    this.saveCurrentSectionIndex(this.currentSectionIndex);
  }

  readLastSection() {
    var index = window.localStorage['lastActiveSection'];
    if (typeof index == "undefined") {
      this.selectSection(this.book.getTOC());
      return;
    }
    var intIndex = parseInt(index);
    this.selectSection(this.book.getSection(intIndex));
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

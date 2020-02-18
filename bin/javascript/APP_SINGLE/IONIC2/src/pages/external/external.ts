import { ElementRef, Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { BookService } from '../../providers/book_service';

@Component({
  selector: 'page-external',
  templateUrl: 'external.html'
})

export class ExternalPage {
  @ViewChild(Content) content: Content;

  section: any;
  url: SafeUrl;
  book : any;
  hideNavigation; boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private bookService: BookService,
      public myElement: ElementRef,
      private sanitizer: DomSanitizer) {
    this.section = navParams.get("section");
    this.url = sanitizer.bypassSecurityTrustResourceUrl(this.section.url);
    this.book = bookService;
    this.hideNavigation = this.book.getFullScreen();
  }

  controlScroll(event) {
/*
    if (this.book.getFullScreen()) {
      let doc = (event.target.contentWindow || event.target.contentDocument);
      if (doc.document) doc = doc.document;
      let lastScrollTop = 0;
      let parent = this;
      doc.addEventListener("scroll", function(){
        let st = this.defaultView.pageYOffset;
        if (st > lastScrollTop){ // downscroll
          console.log("hide int");
          let dimensions = parent.content.getContentDimensions();
          let bottom = dimensions.scrollTop + dimensions.scrollHeight;
          parent.content.scrollTo(0, bottom, 0);

          if(parent.hideNavigation == false) {
            let header = parent.myElement.nativeElement.getElementsByClassName('header')[0];
            header.hidden = true;
            parent.hideNavigation = true;
            parent.content.resize();
          }
        }
        lastScrollTop = st;
      }, false);

      // io-content scroll to bottom in order to hide navigation bar
      let dimensions = this.content.getContentDimensions();
      let bottom = dimensions.scrollTop + dimensions.scrollHeight;
      this.content.scrollTo(0, bottom, 0);
    }
    */
  }

  ngAfterViewInit() {
/*
    if (this.book.getFullScreen()) {
      let header = this.myElement.nativeElement.getElementsByClassName('header')[0];
      header.hidden = true;

    this.content.ionScroll.subscribe((event)=>{
      let scrollamount = this.content.scrollTop;

      // compare position scroll and maximum scroll
        if (scrollamount == 0) {
          // show navigation bar when position scroll not is maximum
      console.log("show");
          if(this.hideNavigation == true) {
         this.hideNavigation = false;
         let header = this.myElement.nativeElement.getElementsByClassName('header')[0];
         header.hidden = false;
         this.content.resize();
      }
        } else {
          // hide navigation bar when position scroll is maximum
      console.log("hide");
          if(this.hideNavigation == false) {
         this.hideNavigation = true;
         let header = this.myElement.nativeElement.getElementsByClassName('header')[0];
         header.hidden = true;
         this.content.resize();
        }
      }
    });
    }
*/
  }

  showHeader() {
    if (this.book.isMenuType()) return true;
    if (this.book.isCardType()) return true;
    if (this.book.isSlidesType()) return true;
    if (this.book.getFullScreen()) return false;
    if (this.book.isTabsType()) return false;
    return false;
  }

}

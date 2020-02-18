import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-external',
  templateUrl: 'external.html'
})
export class ExternalPage {
  section: any;
  url: SafeUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.section = navParams.get("section");
    this.url = sanitizer.bypassSecurityTrustResourceUrl(this.section.url);
  }
}

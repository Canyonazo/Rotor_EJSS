import { Component } from '@angular/core';

import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = MenuPage;

  constructor() {

    (<any>window).selectReference= this.selectReference.bind(this);
  }

  selectReference(url:string) {
    window.open(url,'_system', 'location=yes');
  }
}

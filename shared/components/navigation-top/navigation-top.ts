import { Component, Input } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'navigation-top',
  templateUrl: 'navigation-top.html'
})

export class NavigationLinks {

  @Input('navList') navList: any;
  @Input('myText') navList1: any

  constructor(  protected navCtrl: NavController,public app:App) {

  }

  gotoPage(page, index) {
    if (index) {
      this.app.getRootNav().getActiveChildNav().select(index);
      
    }
    else {
      this.navCtrl.push(page)
    }
  }

}
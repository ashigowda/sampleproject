import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'page-loading',
  templateUrl: 'page-loading.html'
})

export class LoadingPage {
  
 @Input('center') center:any;
  constructor(protected navCtrl: NavController, public app: App) {
  }


}
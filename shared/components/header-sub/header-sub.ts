import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-sub',
  templateUrl: 'header-sub.html'
})

export class SubHeaderPart {

  @Input('profile') profile: any;
  @Input('business') business: any;
  constructor(public nav: NavController) {

  }

}
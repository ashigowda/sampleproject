import { Component, Input } from '@angular/core';
import { NavController,ViewController} from 'ionic-angular';

@Component({
  selector: 'header-main',
  templateUrl: 'header-main.html'
})

export class HeaderPart {

  @Input('title') title: any;
  @Input('icon') icon : any;
  // @Input('icon1') icon1 : any;
  constructor(public nav:NavController,public view:ViewController) {

  }
  
  close1(){
      this.view.dismiss()
  }
 
}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { tabs } from "./tabs";

@NgModule({
  declarations: [
    tabs
  ],
  imports: [
    
    IonicPageModule.forChild(tabs)
  ],
  exports: [
    tabs
  ]
})
export class tabsModule {
}
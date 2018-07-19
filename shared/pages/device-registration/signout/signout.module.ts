import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { signout } from "./signout";

@NgModule({
  declarations: [
    signout
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(signout)
  ],
  exports: [
    signout
  ]
})
export class signoutModule {
}
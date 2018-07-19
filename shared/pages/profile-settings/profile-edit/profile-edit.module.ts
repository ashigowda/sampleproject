import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { profileEdit } from "./profile-edit";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    profileEdit
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profileEdit)
  ],
  exports: [
    profileEdit
  ]
})
export class profileEditModule {
}
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { profileDetails } from "./profile-details";
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    profileDetails
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(profileDetails)
  ],
  exports: [
    profileDetails
  ]
})

export class profileDetailsModule {
}
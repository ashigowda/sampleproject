import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { signin } from "./signin";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    signin
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(signin)
  ],
  exports: [
    signin
  ]
})

export class signinModule {
}
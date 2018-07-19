import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { home } from "./home";
import { ComponentsModule } from '../../shared/components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    home,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(home),PipesModule
  ],
  exports: [
    home
  ]
})

export class homeModule {
}
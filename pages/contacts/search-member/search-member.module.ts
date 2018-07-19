import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../shared/components/components.module';
import { searchMember } from './search-member';

@NgModule({
  declarations: [
    searchMember
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(searchMember)
  ],
  exports: [
    searchMember
  ]
})

export class searchMemberModule {
}
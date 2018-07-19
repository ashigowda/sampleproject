import { NgModule } from '@angular/core';
import { profileDetailsModule } from "./profile-details/profile-details.module";
import { profileEditModule } from "./profile-edit/profile-edit.module";

@NgModule({
  declarations: [
  ],
  imports: [
    profileDetailsModule,
    profileEditModule
  ],
})

export class profileSettingsModule {}
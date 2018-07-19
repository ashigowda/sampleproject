import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { appointmentAddStep2 } from "./appointment-add-step2";
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [
    appointmentAddStep2
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(appointmentAddStep2)
  ],
  exports: [
    appointmentAddStep2
  ]
})

export class appointmentAddStep2Module {
}
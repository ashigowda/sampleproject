import { NgModule } from '@angular/core';
import { patientEditModule } from "./patient-edit/patient-edit.module";
import { ComponentsModule } from '../../shared/components/components.module';
import { patientInformationModule } from './patient-information/patient-information.module';
import { patientListModule } from './patient-list/patient-list.module';
import { patientHealthViewModule } from './patient-health-view/patient-health-view.module';
import { patientHealthStep2Module } from './patient-health-step2/patient-health-step2.module';
import { patientHealthStep1Module } from './patient-health-step1/patient-health-step1.module';
import { patientHealthStep3Module } from './patient-health-step3/patient-health-step3.module';
import { patientHealthConfirmationModule } from './patient-health-confirmation/patient-health-confirmation.module';
import { patientProfileModule } from './patient-profile/patient-profile.module';
import { patientAddStep1PageModule } from './patient-add-step1/patient-add-step1.module';
import { patientAddStep3Module } from './patient-add-step3/patient-add-step3.module';
import { appointmentHistoryModule } from './appointment-history/appointment-history.module';
import { PrescriptionHistoryModule } from './prescription-history/prescription-history.module';
import { patientHealthEditModule } from './patient-health-edit/patient-health-edit.module';
import { patientAddStep2PageModule } from './patient-add-step2/patient-add-step2.module';
import { searchMemberModule } from './search-member/search-member.module';
import { patientRegisterModule } from './patient-register/patient-register.module';


@NgModule({
  declarations: [

  ],
  imports: [patientHealthEditModule,
    patientEditModule, ComponentsModule, patientAddStep3Module, patientInformationModule, patientListModule,
    patientHealthViewModule, patientHealthStep1Module, patientHealthStep2Module, patientHealthStep3Module,
    patientHealthConfirmationModule, patientProfileModule,
    patientAddStep1PageModule, patientAddStep3Module, appointmentHistoryModule,
    patientEditModule, ComponentsModule, patientInformationModule,
    patientListModule, PrescriptionHistoryModule, patientAddStep2PageModule,
    searchMemberModule, patientRegisterModule
  ]
})

export class patientModule { }
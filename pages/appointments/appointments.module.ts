import { NgModule } from '@angular/core';
import { appointmentListModule } from "./appointment-list/appointment-list.module";
import { appointmentDetailsModule } from "./appointment-details/appointment-details.module";
import { appointmentAddStep1Module } from "./appointment-add-step1/appointment-add-step1.module";
import { appointmentAddStep2Module } from "./appointment-add-step2/appointment-add-step2.module";
// import { appointmentAddConfirmationModule } from "./appointment-add-confirmation/appointment-add-confirmation.module";
import { patientVisitModule } from "./patient-visit/patient-visit.module";
import { contactSearchModule } from "./contact-search/appointment-add-contact-search.module";
import { appointmentEditModule } from "./appointment-edit/appointment-edit.module";
import { contactSelectModule } from "./contact-select/contact-select.module";
import { invoiceDetailsModule } from "./invoiceDetails/invoiceDetails.module";
import { invoiceAddModule } from "./invoice-add/invoice-add.module";
import { ComponentsModule } from '../../shared/components/components.module';
import { searchSymptomModule } from './search-symptom/search-symptom.module';

@NgModule({
  declarations: [

  ],
  imports: [
    ComponentsModule,
    appointmentDetailsModule, appointmentAddStep1Module, patientVisitModule,
    appointmentListModule, contactSelectModule,
    appointmentAddStep2Module, contactSearchModule, appointmentEditModule,invoiceDetailsModule,invoiceAddModule,searchSymptomModule
  ],
})
export class AppointmentsModule { }
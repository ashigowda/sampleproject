import { NgModule } from '@angular/core';
import { contactSearchModule } from "./contact-search/contact-search.module";
import { prescriptionAddStep1Module } from "./prescription-add-step1/prescription-add-step1.module";
import { prescriptionDetailsModule } from "./prescription-details/prescription-details.module";
import { prescriptionDrugAddModule } from "./prescription-drug-add/prescription-drug-add.module";
import { prescriptionListModule } from "./prescription-list/prescription-list.module";
import { prescriptionDrugEditModule } from "./prescription-drug-edit/prescription-drug-edit.module";
import { prescriptionAddContactSelectModule } from "./prescription-add-contact-select/prescription-add-contact-select.module";
import { appointmentSelectModule } from "./appointment-select/appointment-select.module";
import { prescriptionAddStep2Module } from "./prescription-add-step2/prescription-add-step2.module";
import { medicationAllergyModule } from './medication-allergy/medication-allergy.module';
import { healthConditionModule } from './health-condition/health-condition.module';
import { prescriptionItemEditModule } from './prescriptionItem-edit/prescriptionItem-edit.module';
import { filterhModule } from './filter/filter-model.module';


@NgModule({
    declarations: [
        
    ],
    imports: [
        contactSearchModule, prescriptionAddContactSelectModule,
        appointmentSelectModule, prescriptionAddStep1Module, prescriptionDetailsModule,
        prescriptionDrugAddModule, prescriptionDrugEditModule, prescriptionListModule, prescriptionAddStep2Module,medicationAllergyModule,healthConditionModule,
        prescriptionItemEditModule,filterhModule
    ],
})

export class PrescriptionModule { }
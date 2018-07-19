import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { NavigationLinks } from "./navigation-top/navigation-top";
import { HeaderPart } from "./header-main/header-main";
import { ContactDetailsMediumPage } from "./contact-details-medium/contact-details-medium";
import { PrescriptonDetailsPage } from "./prescription-card/prescription-card";
import { SubHeaderPart } from "./header-sub/header-sub";
import { PatientVisitDetailsPage } from "./patient-visit-details/patient-visit-details";
import { AddCircleButton } from "./add-circle-button/add-circle-button";
import { ContactSelectForm } from "./contact-select-form/contact-select-form";
import { ContactSearchForm } from "./contact-search-form/contact-search-form";
import { PrescriptonDrugForm } from "./prescription-drug-form/prescription-drug-form";
import { ContactVerificationForm } from "./contact-verification-form/contact-verification-form";
import { ContactConfirmationForm } from "./contact-confirmation-form/contact-confirmation-form";
import { ProfileForm } from "./profile-form/profile-form";
import { AddressForm } from "./address-form/address-form";
import { BusinessForm } from './business-form/business-form';
import { BusinessDetails } from './business-details/business-details';
import { ProfileDetails } from './profile-details/profile-details';
import { contactPatientForm } from './contact-patient-form/contact-patient-form';
import { CallContact } from './call-contact/call-contact';
import { Photoupload } from './photo-upload/photo-upload';
import { LoadingPage } from './page-loading/page-loading';
import { pageLoadingList } from './page-loading-list/page-loading-list';
import { pageLoadingPatientList } from './page-loading-patient-list/page-loading-patient-list';

@NgModule({
    entryComponents: [
        Photoupload,
    ],    
    declarations: [
        NavigationLinks,
        HeaderPart,
        ContactDetailsMediumPage,
        PrescriptonDetailsPage,
        SubHeaderPart,
        PatientVisitDetailsPage,
        contactPatientForm,
        AddCircleButton,
        ContactSelectForm,
        ContactSearchForm,
        PrescriptonDrugForm,
        ContactVerificationForm,
        ContactConfirmationForm,
        ProfileDetails,
        ProfileForm,
        AddressForm,
        BusinessForm,
        BusinessDetails,
        ProfileDetails,
        CallContact,
        Photoupload,
        LoadingPage,
        pageLoadingList,
        pageLoadingPatientList
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CommonModule,
        NavigationLinks,
        HeaderPart,
        ContactDetailsMediumPage,
        PrescriptonDetailsPage,
        SubHeaderPart,
        PatientVisitDetailsPage,
        contactPatientForm,
        AddCircleButton,
        ContactSelectForm,
        ContactSearchForm,
        PrescriptonDrugForm,
        ContactVerificationForm,
        ContactConfirmationForm,
        AddressForm,
        BusinessDetails,
        BusinessForm,
        ProfileDetails,
        ProfileForm,
        CallContact,
        Photoupload,
        LoadingPage,
        pageLoadingList,
        pageLoadingPatientList
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentsModule {
}
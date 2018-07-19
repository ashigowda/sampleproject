import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { ClinicApp } from './app.component';
import { patientModule } from "../pages/contacts/patient.module";
import { HttpModule, } from "@angular/http";
import { AppointmentsModule } from "../pages/appointments/appointments.module";
import { tabsModule } from "../pages/tabs/tabs.module";
import { homeModule } from "../pages/home/home.module";
import { SettingModule } from "../pages/settings/settings.module";
import { BusinessManagementModule } from "../pages/businessManagement/business-management.module";
import { PrescriptionModule } from "../pages/prescriptions/prescription.module";
import {
  NoopInterceptorProvider,
  EnsureHttpsInterceptorProvider,
  AuthInterceptorProvider,
  LoggingInterceptorProvider,
  CachingInterceptorProvider,
  HttpErrorInterceptorProvider,
  ApiProvider,
  InitApiConfigurationProvider,
  ApiInterceptor,
  ApiInterceptorProvider,
  ApiConfiguration,
  HomeService,
  AuthDeviceService,
  AuthProfileService,
  AuthSignService,
  ProfileService,
  ClinicBusinessService,
  ClinicOpeningHourService,
  ClinicUserService,
  ClinicPatientService,
  ClinicPatientAppointmentService,
  ClinicPatientPrescriptionService,
  ClinicPatientHealthrecordService,
  EmailTestUtilService,
  ListofvaluesUtilService
} from 'mediserve-services'
import { HttpClientModule } from '@angular/common/http';
import { deviceRegistrationModule } from '../shared/pages/device-registration/device-registration.module';
import { ComponentsModule } from '../shared/components/components.module';
import { profileSettingsModule } from '../shared/pages/profile-settings/profile-settings.module';
import { chatModule } from '../shared/pages/chat/chat.module';

import { CodePush } from '@ionic-native/code-push';
import { CallNumber } from '@ionic-native/call-number';

@NgModule({
  declarations: [
    ClinicApp,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    patientModule,
    deviceRegistrationModule,
    AppointmentsModule,
    PrescriptionModule,
    SettingModule,
    BusinessManagementModule,
    tabsModule,
    HttpModule,
    homeModule,
    ComponentsModule,
    chatModule,
    profileSettingsModule,
    IonicModule.forRoot(ClinicApp, { tabsPlacement: 'bottom', tabsHideOnSubPages: 'false' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClinicApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    InitApiConfigurationProvider,
    ApiInterceptor,
    ApiInterceptorProvider,
    NoopInterceptorProvider,
    EnsureHttpsInterceptorProvider,
    AuthInterceptorProvider,
    LoggingInterceptorProvider,
    CachingInterceptorProvider,
    HttpErrorInterceptorProvider,
    CodePush, Camera, CallNumber, ApiConfiguration, HomeService,
    AuthDeviceService,AuthProfileService,AuthSignService,
    ProfileService,ClinicBusinessService,
    ClinicOpeningHourService,ClinicUserService,ClinicPatientService,ClinicPatientAppointmentService,ClinicPatientPrescriptionService,
    ClinicPatientHealthrecordService,EmailTestUtilService,ListofvaluesUtilService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

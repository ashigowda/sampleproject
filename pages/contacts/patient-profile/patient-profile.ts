import { Photoupload } from './../../../shared/components/photo-upload/photo-upload';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ActionSheetController, Platform, ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ApiProvider, PatientResponse, ClinicPatientService, UserTemplate } from "mediserve-services";
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: '/patient-information/patient-profile/:clinicPatientId',
  defaultHistory: ['patientInformation']
})

@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})

export class patientProfile extends BasePage {

  patient: Observable<PatientResponse>;
  input: ClinicPatientService.ReadParams;
  profile: Observable<UserTemplate>;
  public photos: any;
  clinicId:any;

  constructor(
      protected navCtrl: NavController,
    protected navParams: NavParams,
    protected svcsCtrl: ApiProvider,
    public actionsheetCtrl: ActionSheetController,
    public camera: Camera,
    public platform: Platform,
    public modalCtrl: ModalController
  ) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "Patient Details";
    let patientId = this.navParams.get('clinicPatientId');
    this.clinicId = this.svcsCtrl.homeService.getItem('clinicId')
    this.input = {
      patientId: patientId,
      clinicId: this.clinicId
    }
  }

  ionViewDidLoad() {
    this.patient = this.svcsCtrl.clinicPatientService.read(this.input)
  }

  edit(clinicPatientId: string) {
    this.navCtrl.push('patientEdit', { clinicPatientId })
  }

  presentProfileModal() {
    let photoUploadModal = this.modalCtrl.create(Photoupload, {
      type: "Patient",
      referenceId: this.clinicId,
      name: "Patient Picture",
      imageId: "????"
    });
    photoUploadModal.present();
  }

}
import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicPatientService, FamilyMember, PatientResponse } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
    defaultHistory: ['patientList']
})

@Component({
    selector: 'page-search-member',
    templateUrl: 'search-member.html'
})

export class searchMember extends BasePage {
    member: Observable<PatientResponse>;
    memberId: any;
    inputRegister: ClinicPatientService.RegisterParams;
    phone: any;
    selectedMember: Observable<FamilyMember[]>;
    input: ClinicPatientService.SearchFamilyMemberParams;
    show: boolean = false;
    hide: boolean = false;
    
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ApiProvider,
    ) {
        super(navCtrl, navParams, svcsCtrl)
        this.title = "Search member"
    }

    search(phone) {
        this.input = {
            phone: phone,
            clinicId: this.svcsCtrl.homeService.getItem('clinicId')
        }
        this.selectedMember = this.svcsCtrl.clinicPatientService.searchFamilyMember(this.input)
        this.show = true;
        this.hide = false;
    }

    select(phone, memberId) {
        this.memberId = memberId;
        this.phone = phone;
        this.hide = true;
    }

    register() {
        this.inputRegister = {
            clinicId: this.svcsCtrl.homeService.getItem('clinicId'),
            body: {
                doctor: 'string',
                member: this.memberId,
                phone: this.phone
            }
        }
        this.svcsCtrl.clinicPatientService.register(this.inputRegister).subscribe((member) => {
            this.navCtrl.push('patientRegister', { clinicPatientId: member._id });
        }, (err) => {
            console.log("error occured" + err)
        })
    }
    
    newMember() {
        this.navCtrl.push('patientAddStep1', { phone: this.phone })
    }
}
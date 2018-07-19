import { Component, Input } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ClinicPatientService } from 'mediserve-services/lib';
@Component({
    selector: 'contact-search-form',
    templateUrl: 'contact-search-form.html'
})

export class ContactSearchForm {

    patientListNew: any = [];

    @Input('patients') clinicPatientsList: ClinicPatientService;
    @Input('data') data: any;
    @Input('center') center: any;
    
    constructor(public view: ViewController, public nav: NavController) {
    }

    ngOnInit() {
        this.clinicPatientsList = this.clinicPatientsList;
    }
    setItems() {

        this.clinicPatientsList = this.clinicPatientsList;
    }

    getItems(ev) {
        // this.setItems();
        // let val = ev.target.value;
        // if (val && val.trim() !== '') {
        //     this.clinicPatientsList = this.clinicPatientsList.filter((patient) => {
        //             console.log("patient is"+ JSON.stringify(patient))
        //             return patient.member.phone.toLowerCase().indexOf(val.toLowerCase()) > -1 || patient.member.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        //         })
        // }
    }

    close(clinicPatientId) {
        if (this.data == 'createAppointment') {
            this.nav.push('contactSelect', { data: 'book', clinicPatientId })
        }
        else if (this.data == 'createPrescription') {
            //.this.nav.push('contactSelect', { data: 'create', clinicPatientId})
            this.nav.push('prescriptionAddContactSelect', { data: 'write', clinicPatientId })
        }
        // else {
        //     this.nav.push('prescriptionAddContactSelect', { data: 'write', clinicPatientId })
        // }

    }

}
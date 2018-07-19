import { NavController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { BasePage } from '../../base/BasePage';
import { ApiProvider, ClinicUserResponse } from 'mediserve-services/lib';
import { Observable } from 'rxjs/Observable';

@IonicPage({

})

@Component({
    selector: 'page-filter-model',
    templateUrl: 'filter-model.html'
})

export class FilterModel extends BasePage {

    user: Observable<ClinicUserResponse[]>;
    data: any = [];
    doctor1: boolean;

    clinicId = this.svcsCtrl.homeService.getItem('clinicId')

    constructor(
        protected navCtrl: NavController, public view: ViewController,
        public navParam: NavParams, protected svcsCtrl: ApiProvider) {
        super(navCtrl, navParam, svcsCtrl);
        this.user = this.svcsCtrl.clinicUserService.list(this.clinicId)

    }

    dismiss() {
        this.view.dismiss();
    }

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'arrow-forward';
        } else {
            data.showDetails = true;
            data.icon = 'arrow-up';
        }
    }

    
}

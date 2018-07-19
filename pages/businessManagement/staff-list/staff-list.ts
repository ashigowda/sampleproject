import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider, ClinicUserResponse, ClinicUserService } from 'mediserve-services/lib';
import { BasePage } from '../../base/BasePage';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'business/staff-list',
  defaultHistory: ['businessManagement']
})
@Component({
  selector: 'page-staff-list',
  templateUrl: 'staff-list.html'
})

export class StaffList extends BasePage {

  user: Observable<ClinicUserResponse[]>;
  tabIndex: string = "0";
  input: ClinicUserService.DeleteParams
  clinicId = this.svcsCtrl.homeService.getItem('clinicId');

  constructor(
    protected navParams: NavParams,
    protected navCtrl: NavController,
    protected svcsCtrl: ApiProvider) {
    super(navCtrl, navParams, svcsCtrl);
    this.title = "User Management";
    this.svcsCtrl.clinicUserService.list(this.clinicId).subscribe((response) =>{
      console.log('response is'+JSON.stringify(response))
    })
  }

  ionViewWillEnter() {
    this.user = this.svcsCtrl.clinicUserService.list(this.clinicId)
  }

  refresh(refresher) {
    this.svcsCtrl.homeService.reload(this.user, refresher);
  }

  create() {
    this.navCtrl.push('staffAdd')
  }

  view(id: string) {
    this.svcsCtrl.homeService.setItem("userId", id)
    this.navCtrl.push('staffDetails')
  }

  edit(userId: string) {
    this.svcsCtrl.homeService.setItem("userId", userId)
    this.navCtrl.push('staffEdit')
  }

  deleteUsers(userId: string) {
    this.input = {
      clinicId: this.clinicId,
      clinicUserId: userId
    }
    this.user = this.svcsCtrl.clinicUserService.delete(this.input);
  }

  viewArchived(id: string) {
    this.svcsCtrl.homeService.setItem("userId", id)
    this.navCtrl.push('staffDetails',{archive:'archive'})
  }


}
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiProvider, HealthCondition } from 'mediserve-services';   

@Injectable()
export class BasePage {
    source: any;
    title: string;
    response: string;
    message: string;
    loading;
    center = 'center'
    healthRecords:HealthCondition[]
    pageMap: {
        home: "home",
        signin: "signin",
        deviceregister: "deviceregister",
        deviceverify: "deviceverify",
        profilesetupStep1: "profilesetupStep1",
        profilesetupStep2: "profilesetupStep2",
        profileSetupStep3Pin: "profileSetupStep3Pin",
        profileVerifyStep1: "profileVerifyStep1",
        profileVerifyStep2Pin: "profileVerifyStep2Pin",
        ebusinessCheckSelect: "ebusinessCheckSelect",
        devicecheck: "devicecheck",
        deviceerror: "deviceerror"
    }

    constructor(
        protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {



    }
    // gotoPage(pageId){
    //     this.navCtrl.setRoot(this.pageMap[pageId])

    // }

    gotoSignin() {
        this.navCtrl.setRoot('signin')
    }

    gotoDeviceRegister() {
        this.navCtrl.setRoot('deviceregister')
    }

    gotoDeviceVerify() {
        this.navCtrl.setRoot('deviceverify')
    }

    gotoProfileSetupStep1() {
        this.navCtrl.setRoot('profilesetupStep1')
    }

    gotoProfileSetupStep2() {
        this.navCtrl.setRoot('profilesetupStep2')
    }

    gotoProfileSetupStep3() {
        this.navCtrl.setRoot('profileSetupStep3Pin')
    }

    gotoProfileVerifyStep1() {
        this.navCtrl.setRoot('profileVerifyStep1')
    }

    gotoProfileVerifyStep2() {
        this.navCtrl.setRoot('profileVerifyStep2Pin')
    }

    gotoHome() {
        this.navCtrl.setRoot('ebusinessCheckSelect')
    }

    gotoRetry() {
        this.navCtrl.setRoot('devicecheck')
    }

    gotoError(error = {}, source = 'devicecheck') {
        this.navCtrl.setRoot("deviceerror", {
            source: source,
            error: error
        })
    }

    gotoRegisteredHome() {
        this.navCtrl.push('ebusinessHomeRegistered')
    }
    gotoRegistrationStep2() {
        this.navCtrl.push('ebusinessRegistrationStep2')
    }
    gotoRegistrationStep3() {
        this.navCtrl.push('ebusinessRegistrationStep3')
    }
    gotoVerifyBusinessPage1() {
        this.navCtrl.push('ebusinessVerify')
    }

}
import { Injectable } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Notification, Address, ApiProvider, DeviceProfileValidate, DeviceRegisterResponse, DeviceProfileVerify, UserTemplate, DeviceSignupResponse, DeviceRegister, DeviceConfirm, DeviceConfirmResponse, DeviceVerify } from 'mediserve-services';
import { BasePage } from './BasePage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrationBase extends BasePage {
    // profilevalidate$: any;
    deviceVerify: DeviceProfileValidate;
    profilevalidate: DeviceProfileValidate;
    deviceConfirm1$: Observable<DeviceConfirmResponse>;
    device$: Observable<DeviceRegisterResponse>;
    // login$: any;
    login$: Observable<DeviceSignupResponse>;
    // resp$: any;
    register$: Observable<DeviceRegisterResponse>;
    countryCode: string = "0091";
    phoneNumber: string;
    otp: string;
    // pinRepeat: string;
    deviceRegister: DeviceRegister = {
        applicationScope: "clinic",
        countryCode: "0091",
        phone: "9542037170",
        device: {
            applicationScope: "clinic",
            deviceId: "",
            available: "",
            model: "",
            cordova: "",
            platform: "",
            uuid: "",
            version: ""
        }
    };
    deviceConfirm: DeviceConfirm
    // deviceProfile : DeviceRegisterResponse
    profile: UserTemplate; //DeviceProfileValidate;
    address: Address;
    notification: Notification;
    dv: DeviceProfileVerify = {
        applicationScope: "clinic",
        countryCode: "0091",
        deviceToken: "1234",
        phone: "9542037170",
        username: '1234'
    }
    input: DeviceVerify = {
        applicationScope: 'applicationScope',
        countryCode: '0091',
        phone: '9542037170',
        device: {},
        deviceToken: this.svcsCtrl.homeService.getItem('deviceToken')
    }

    constructor(
          protected navCtrl: NavController,
        protected navParams: NavParams,
        protected svcsCtrl: ApiProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);

    }

    async verifyProfile() {
        this.message = "Verifying Profile";
        this.svcsCtrl.authDeviceService.verify(this.input).subscribe((response) => {
            console.log(JSON.stringify(response))
            this.gotoSignin();
        }, (err) => {
            console.log(err);
        });

        // this.register$ = await this.svcsCtrl.authDeviceService.verify(this.dv);
        // this.register$.subscribe((data) => {
        //     console.log(data);
        //     console.log("Go to Signin")
        //     this.gotoSignin();
        // }, (error) => {
        //     console.log(error);
        //     console.log("Go to Register: status " + error.status)
        //     this.message = error.message;
        //     if (error.status == 0) {
        //         this.gotoError();
        //     } else if (error.status == 401) {
        //         this.gotoSignin();
        //     } else {
        //         this.gotoDeviceRegister();
        //     }
        // })//.unsubscribe();
    }

    getPhonenumber() {
        this.readPhonenumber(true);
    }

    readPhonenumber(redirect: boolean) {
        this.message = "Getting phone details";
        this.phoneNumber = this.svcsCtrl.homeService.getItem("phone");
        if (!this.phoneNumber && redirect) this.gotoDeviceRegister();
        if (!this.phoneNumber || this.phoneNumber == '') {
            this.phoneNumber = "9542037170";
        }
        this.countryCode = this.svcsCtrl.homeService.getItem("countryCode");
        if (!this.countryCode || this.countryCode == '') {
            this.countryCode = "0091";
        }
    }

    getProfile() {
        this.message = "Getting profile";
        
        if (!this.svcsCtrl.homeService.getItem("deviceToken")) {
            this.gotoDeviceRegister();
        };
        // this.svcsCtrl.profileService.read().subscribe((response) => {
        //     console.log("get profile is" + JSON.stringify(response))
          
        // }, (err) => {
        //     console.log(err);
        // })


        // if (!this.svcsCtrl.homeService.getItem("deviceToken")) {
        //     alert('in device token')
        //     this.gotoDeviceRegister();
        // };
        // let profileData = this.svcsCtrl.homeService.getItem("profile");
        // console.log("hellooooo" + JSON.stringify(profileData))
        // if (profileData) {
        //     console.log("hellooooo" + JSON.stringify(profileData))
        //     this.profile = Object.assign({}, profileData);
        //     this.address = Object.assign({}, profileData.address);
        //     this.notification = Object.assign({}, profileData.notification);
        // }
    }

    initProfile() {
        this.message = "Setting up profile";
        if (!this.profile) this.profile = {
            firstName: "",
            lastName: "",
            email: "",
            pin: "",
            dateOfBirth: "",
            gender: "",
            address: {},
            notification: {}
        };
        this.svcsCtrl.homeService.setItem("profile", this.profile).then((data) => {
            console.log(data);
            this.gotoProfileSetupStep2();
        });
    }

    setProfile() {
        this.message = "Storing profile";
        this.profile.address = this.address;
        this.notification = {
            email: true,
            text: true,
            newsLetter: true
        }
        this.svcsCtrl.homeService.setItem("profile", this.profile).then((data) => {
            console.log(data);
            this.gotoProfileSetupStep3();
        });
    }

    async setVerifyProfile() {
        this.message = "Storing verification details";
        this.profilevalidate = {
            applicationScope: 'string',
            countryCode: 'string',
            phone: 'string',
            device: {},
            deviceToken: 'string',
            email: 'string',
            dateOfBirth: 'string',
            gender: 'string',
            pin: 'string',

        }
        // this.profilevalidate$ = await this.svcsCtrl.authDeviceService.isRegistered(this.deviceVerify);
        // this.profilevalidate$.subscribe((data) => {

        //     this.gotoProfileVerifyStep2();

        // }, (error) => {
        //     console.log(error);
        //     console.log("Go to Register: status " + error.status)
        //     this.message = error.message;

        // })
    }


    async registerDevice() {
      let  deviceRegister: DeviceRegister = {
            applicationScope: "clinic",
            countryCode: "0091",
            phone: "9542037170",
            device: {
                applicationScope: "clinic",
                deviceId: "",
                available: "",
                model: "",
                cordova: "",
                platform: "",
                uuid: "",
                version: ""
            }
        };
        this.message = "Registering device";
        this.svcsCtrl.authDeviceService.register(deviceRegister).subscribe((response) => {
            console.log("in device register"+JSON.stringify(response))
            this.gotoDeviceVerify();
        }, ((err) => {
            if (err.status == 0) {
                this.gotoError();
            } else if (err.status == 401) {
                this.gotoSignin();
            }
        }))

    }
    

    async confirmDevicetoberemoved() {
        this.message = "Confirming device";
        this.deviceConfirm = {
            otp: this.otp,
            applicationScope: 'clinic',
            countryCode: '0091',
            phone:  this.phoneNumber,
            device: {
            }
        }
        this.svcsCtrl.authDeviceService.confirm(this.deviceConfirm).subscribe((response) => {
            console.log("response is" + JSON.stringify(response))
            if (response.phoneStatus && response.phoneStatus == "unregistered") {

                this.gotoProfileSetupStep1();
            } else if (response.phoneStatus && response.phoneStatus == "registered") {

                this.gotoProfileVerifyStep1();
            }
        }, (err) => {
            console.log(err);
        })

        // this.deviceConfirm1$ = await this.svcsCtrl.authDeviceService.confirm(this.deviceConfirm)
        // // this.gotoDeviceVerify();
        // console.log("Go to Verify" + JSON.stringify(this.deviceConfirm1$))
        // this.deviceConfirm1$.subscribe((data) => {
        //     // let data = response.data;
        //     if (data.phoneStatus && data.phoneStatus == "unregistered") {

        //         this.gotoProfileSetupStep1();
        //     } else if (data.phoneStatus && data.phoneStatus == "registered") {

        //         this.gotoProfileVerifyStep1();
        //     }
        // }, (error) => {
        //     console.log(error);
        //     console.log("Go to Register: status " + error.status)
        //     this.message = error.message;

        // })

        // this.otp = await this.svcsCtrl.authDeviceService.confirm(this.deviceConfirm)
        //     .success((response) => {
        //         console.log(response);
        //         let data = response.data;
        //         if (data.phoneStatus && data.phoneStatus == "unregistered") {
        //             this.gotoProfileSetupStep1();
        //         } else if (data.phoneStatus && data.phoneStatus == "registered") {
        //             this.gotoProfileVerifyStep1();
        //         }
        //     })
        //     .failure((error) => {
        //         this.response = error.message
        //     })
    }

    // signupProfile() {
    //     this.message = "Signing up profile";
    //     execute(this.svcsCtrl.signinService.signupProfile(this.profile)).success((data) => {
    //         console.log(data);
    //         this.svcsCtrl.signinService.removeProfile();
    //         console.log("Navigating to Signin")
    //         this.gotoSignin();
    //     });

    // }

    // validateProfile() {
    //     this.message = "Validating profile";
    //     execute(this.svcsCtrl.signinService.validateProfile(this.profileVerify)).success((data) => {
    //         console.log(data);
    //         this.svcsCtrl.signinService.removeVerifyProfile();
    //         console.log("Navigating to Signin")
    //         this.gotoSignin();
    //     }).failure((data) => {
    //         this.response = "Error: " + data.message;
    //     });

    // }

    async login() {
        this.message = "Logging In";
        //     execute(this.svcsCtrl.authSignService.signin(this.pinRepeat).login(this.pinRepeat)).success((data) => {
        //         console.log(data);
        //         this.response = data.message;
        //         //this.navCtrl.push('signin')
        //         this.gotoHome();
        //     }).failure((data) => {
        //         this.response = "ERROR(remote): "
        //         this.response += data.error.message ? data.error.message : data.message;
        //     });
        // }

        this.login$ = await this.svcsCtrl.homeService.getItem("profile");
        // this.login$.subscribe((data) => {
        console.log("sfsd" + JSON.stringify(this.login$));
        console.log("Go to Signin")

        this.gotoHome();
        // }, (error) => {
        // console.log(error);
        // alert("hello")
        // console.log("Go to Register: status " + error.status)
        // this.message = error.message;
        // if (error.status == 0) {
        //     this.gotoError();
        // } else if (error.status == 401) {
        //     this.gotoSignin();
        // } else {
        //     this.gotoDeviceRegister();
        // }
        // }).unsubscribe();
    }





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
        // this.navCtrl.setRoot('tabs')
        this.navCtrl.setRoot('ebusinessCheckSelect')
    }

    gotoRetry() {
        this.navCtrl.setRoot('devicecheck')
    }

    gotoError() {
        this.navCtrl.setRoot('deviceerror')
    }

}
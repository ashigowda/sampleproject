import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
    selector: 'page-chat-register',
    templateUrl: 'chat-register.html'
})

export class chatRegister {

    title: string;

    constructor(protected navCtrl: NavController) {
        this.title = 'Medi Serve'
    }

    startChat() {
        this.navCtrl.push('chatCreate')
    }

    ionViewWillEnter() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(56px)';
            });
        }
    }

    ionViewWillLeave() {
        let tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map( key => {
                tabs[key].style.transform = 'translateY(0)';
            });
        }
    }

}

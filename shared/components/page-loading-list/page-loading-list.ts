import { Component} from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
    selector: 'page-loading-list',
    templateUrl: 'page-loading-list.html'
})

export class pageLoadingList {

    // @Input('center') center: any;
    constructor(protected navCtrl: NavController, public app: App) {
    }


}
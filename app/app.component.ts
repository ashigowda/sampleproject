
import { Platform, Events, AlertController, Alert, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
@Component({
  templateUrl: 'app.html'
})
export class ClinicApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'devicecheck';

  public alertVisible: boolean = false;
  private errorsQueue: Array<any> = [];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private events: Events,
    private alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // hook up event listners
    this.subcribeEvents();
  }

  private subcribeEvents() {

    // hook to the global (response) error event
    this
      .events
      .subscribe('RESPONSE:ERROR', (response) => {
        console.log('response in app components is' + JSON.stringify(response))
        // add the error to the error queue
        this.errorsQueue.push({
          source: response.source,
          error: response.error
        });

        // prompt the current error
        this.handleErrors();

      });

  }

  private handleErrors() {

    // if an error is already presented to the user,
    // the queue handles it after the user clicks OK
    if (this.alertVisible) {
      return;
    }

    // the alert is visible, set the flag to true
    this.alertVisible = true;

    // construct the alert
    let alert: Alert = this.alertCtrl.create({
      title: "Response Error",
      subTitle: this.errorsQueue[0].error.status + ": " + this.errorsQueue[0].error.statusText,
      //subTitle: "Caught in " + this.errorsQueue[0].source,
      message: this.errorsQueue[0].error.message,
      buttons: [
        {
          text: 'Retry',
          //role: 'cancel',
          handler: () => {
            console.log('Retry clicked' + this.errorsQueue[0].source);
            console.log(JSON.stringify(this.errorsQueue[0]))
            this.nav.push(this.errorsQueue[0].source);
          }
        }
      ]

    });


    // hook to the dismiss event, and process
    // the errorQueue (if applicable)
    alert
      .onDidDismiss(() => {

        // the current alert is dismissed
        this.alertVisible = false;

        // remove the current error from the queue
        this.errorsQueue.splice(0, 1);

        // if the errorQueue still has errors, show the next error
        if (this.errorsQueue.length !== 0) {

          // recursive call in case of multiple errors
          this.handleErrors();
        }

      });


    // show the alert
    alert
      .present();

  }

}


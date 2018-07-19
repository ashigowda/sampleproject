import { Component, ApplicationRef } from '@angular/core';
import { NavController, IonicPage, AlertController, LoadingController } from 'ionic-angular';
import { CodePush, ILocalPackage, DownloadProgress, IRemotePackage, SyncStatus, InstallMode } from '@ionic-native/code-push';
import { SplashScreen } from '@ionic-native/splash-screen';

@IonicPage()
@Component({
    selector: 'page-update-management',
    templateUrl: 'update-management.html'
})

export class updateManagement {

    title = "Update App"


    constructor(
          protected navCtrl: NavController,
        private appRef: ApplicationRef,
        private codePush: CodePush,
        //private platform: Platform,
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController,
        private splashScreen: SplashScreen
      ) {
    
      }
    
      isUpdateAvailable: boolean = false;
      status: string = '';
      isProcessing: boolean = false;
      deployment: string = '';
      currentPackage: ILocalPackage;
      downloadProgress: DownloadProgress;
    
      ionViewWillEnter() {
        this.getCurrentPackage()
      }
    
      getCurrentPackage() {
        this.codePush.getCurrentPackage().then((result: ILocalPackage) => {
          console.log(result)
          //alert(result);
          this.currentPackage = result;
          this.appRef.tick();
        }).catch((err) => {
          console.error(err);
        })
      }
    
      checkForUpdate(key) {
        this.isProcessing = true;
        this.status = 'Checking ... ';
        this.codePush.checkForUpdate(key).then((result: IRemotePackage) => {
          this.isUpdateAvailable = result !== null;
          this.status = result === null ? 'Up to Date' : 'Update Available'
          this.isProcessing = false;
          this.appRef.tick();
        });
    
      }
    
      syncHandler(status: SyncStatus) {
        switch (status) {
          case SyncStatus.UP_TO_DATE:
            this.status = 'Up-to-date';
            break;
          case SyncStatus.UPDATE_INSTALLED:
            this.status = 'Update Installed';
            break;
          case SyncStatus.UPDATE_IGNORED:
            this.status = 'Update Ignored';
            break;
          case SyncStatus.ERROR:
            this.status = 'Error';
            break;
          case SyncStatus.IN_PROGRESS:
            this.status = 'In Progress';
            break;
          case SyncStatus.CHECKING_FOR_UPDATE:
            this.status = 'Checking for Update';
            break;
          case SyncStatus.AWAITING_USER_ACTION:
            this.status = 'Awaiting User Action';
            break;
          case SyncStatus.DOWNLOADING_PACKAGE:
            this.status = 'Downloading Package';
            break;
          case SyncStatus.INSTALLING_UPDATE:
            this.status = 'Installing Update';
            this.presentLoading();
            this.splashScreen.show();
            break;
          case SyncStatus.UPDATE_INSTALLED:
            this.status = 'Installed the update ..';
            const alert = this.alertCtrl.create({
              title: 'Update',
              message: 'A new update was installed and will be available on next app restart',
              buttons: ['OK']
            });
            alert.present();
            alert.onDidDismiss(() => {
            });
            break;
          case SyncStatus.ERROR:
            this.status = 'An error occurred :( ...';
            break;
          default:
            this.status = 'An unhandled sync status ..';
            break;
        }
        this.appRef.tick();
      }
      updateDownloadProgress(progress: DownloadProgress) {
        this.downloadProgress = progress;
        this.appRef.tick();
      }
    
      presentLoading() {
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 10000
        });
        loader.present();
      }
    
      sync(key) {
        this.codePush.sync({
          updateDialog: {
            appendReleaseDescription: true,
            descriptionPrefix: "\n\nChange log:\n"
          },
          installMode: InstallMode.IMMEDIATE,
          mandatoryInstallMode: InstallMode.IMMEDIATE,
          deploymentKey: key
        }, (progress) => this.updateDownloadProgress(progress)).subscribe((status) => this.syncHandler(status));
      }


}
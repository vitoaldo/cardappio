import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  showToast(title: string): void {
    this.toastCtrl.create({ message: title, position: 'middle', duration: 3000 }).then((obj) => {
      obj.present();
    });
  }

  showAlert(title: string, message: string): void {
    this.alertCtrl.create({ message, buttons: ['Ok'], header: title, backdropDismiss: false }).then((obj) => {
      obj.present();
    });
  }
}

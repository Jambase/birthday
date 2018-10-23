import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

 

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Happy Birthday!',
      subTitle: 'As you go through each year, remember to count your blessings, not your age. Count your amazing experiences, not your mistakes. Happy Birthday to an insanely awesome person!',
      buttons: ['OK']
    });
    alert.present();
  }
}

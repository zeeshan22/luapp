import { Component } from '@angular/core';
import {  NavController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TrackclaimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-trackclaim',
  templateUrl: 'trackclaim.html',
})
export class TrackclaimPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackclaimPage');
  }
search(){
	let loading = this.loadingCtrl.create({
    content: 'Searching Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 3000);
}
}

import { Component } from '@angular/core';
import {  NavController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SubmitdocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-submitdoc',
  templateUrl: 'submitdoc.html',
})
export class SubmitdocPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitdocPage');
  }
upload(){
	let loading = this.loadingCtrl.create({
    content: 'Uploading Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 3000);
}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

import {address} from './address';

/**
 * Generated class for the NetworklistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-networklist',
  templateUrl: 'networklist.html',
})
export class NetworklistPage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
	  
  }
RIYADH(){
	
	
   let profileModal = this.modalCtrl.create(address, { userId: 8675309 });
	profileModal.present();
 
}

}

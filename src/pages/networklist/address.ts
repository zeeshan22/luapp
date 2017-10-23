import { Component } from '@angular/core';
import {  ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
  
  
})



export class address {

 constructor(private callNumber: CallNumber,public viewCtrl: ViewController) {
 }

 
 dismiss() {
   
   this.viewCtrl.dismiss();
 }
 CALL(N){
	 
	  this.callNumber.callNumber(N, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  
 }
 iload=false;
 onLoad(){
	 this.iload=true;
 }
}
/**
 * Generated class for the FindusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

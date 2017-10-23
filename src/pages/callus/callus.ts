import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the CallusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-callus',
  templateUrl: 'callus.html',
  providers: [CallNumber]
})
export class CallusPage {

  constructor(private callNumber: CallNumber,public navCtrl:NavController) { 
  this.callme();
  }

  callme():void{
	  this.callNumber.callNumber("00966112717222", true)
  .then(() => this.navCtrl.pop())
  .catch(() => this.navCtrl.pop());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CallusPage');
  }

}

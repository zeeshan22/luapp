import { Component,ViewChild, ElementRef  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Platform } from 'ionic-angular';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';



/**
 * Generated class for the LocateusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;

@Component({
  selector: 'page-locateus',
  templateUrl: 'locateus.html',
})
export class LocateusPage {

	
  constructor(public navCtrl: NavController) {

  }

  
	home()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	inbox()
	{
		this.navCtrl.push(InboxPage);
	}
	
	paybill()
	{
		this.navCtrl.push(NetworkPage,{pageurl:''});
	}
	enquiry()
	{
		this.navCtrl.push(EnquiryPage);
	}

}

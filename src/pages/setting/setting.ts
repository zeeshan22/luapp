import { Component } from '@angular/core';
import {  NavController,App } from 'ionic-angular';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';

import {TermandconditionPage} from '../termandcondition/termandcondition';
import {ScheduleofchargesPage} from '../scheduleofcharges/scheduleofcharges';
	
import {AboutappPage } from '../aboutapp/aboutapp';
import {TermofusePage } from '../termofuse/termofuse';


import {LoginPage } from '../login/login';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,public appCtrl: App) {
  }
lang='english';
  
  	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	go_to_about_this_app()
	{
		this.navCtrl.push(AboutappPage);
	}
	go_to_term_of_use_mob()
	{
		this.navCtrl.push(TermofusePage);
	}
	go_to_tac()
	{
		this.navCtrl.push(TermandconditionPage);
	}
	go_to_sos()
	{
		this.navCtrl.push(ScheduleofchargesPage);
	}
	logout1()
	{
		this.appCtrl.getRootNav().setRoot(LoginPage);
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

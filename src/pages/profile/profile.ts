
import { Component } from '@angular/core';
import {  LoadingController,AlertController,NavController,App } from 'ionic-angular';


import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


import {ProfilehistoryPage} from '../profilehistory/profilehistory';
import {ProfileunitPage} from '../profileunit/profileunit';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';


import {ProfileupdatePage } from '../profileupdate/profileupdate';






/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

		tokenvalues:Tokendata[];
		customerdata:any;
		
  
  
	
	constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService,public appCtrl: App) {
	
		/*------------Getting setting the logged user value to customerdata-----------*/
		this.tokendataService.gettokendata().then(tokenvalues => {
		this.tokenvalues = tokenvalues;
		
		this.customerdata	=		this.tokenvalues[0].accesstok;
		
		});
		
	
	}
	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	goto_unit()
	{
		this.navCtrl.push(ProfileunitPage);
	}  
	goto_history()
	{
	this.navCtrl.push(ProfilehistoryPage);
	//this.navCtrl.setRoot(ProfilehistoryPage);
	}
	
	goto_profileupdate()
	{
		this.navCtrl.push(ProfileupdatePage);
	}
	
	goto_changepass()
	{
	
	}
	
	
	
	
	
	ionViewDidLoad() {
	
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

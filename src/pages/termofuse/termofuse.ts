import { Component } from '@angular/core';
import {  LoadingController,AlertController,NavController,NavParams,App } from 'ionic-angular';


import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


import {ProfilehistoryPage} from '../profilehistory/profilehistory';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';

	



import * as $ from 'jquery';


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-termofuse',
  templateUrl: 'termofuse.html',
})
export class TermofusePage {

  tokenvalues:Tokendata[];

  pagename1:any;
  result1:any;
  msg:any;
  title2:any;
  content2:any;
  myurl:string;
  
  
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService, public navParams: NavParams, public appCtrl: App) {
  
  
	
			
			
			
			
	
	
	
	
  }
	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
  
	goto_history()
	{
		this.navCtrl.push(ProfilehistoryPage);
		//this.navCtrl.setRoot(ProfilehistoryPage);
	}

  getHeroes(): void {}
  
  
  update():void{}


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


ionViewDidLoad() 
{

	this.pagename1 = this.navParams.get("pagename1");

}
  
	
	
	  


}

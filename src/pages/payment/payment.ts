import { Component } from '@angular/core';

import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController, App, MenuController } from 'ionic-angular';
	


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
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safe' })
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {


  tokenvalues:Tokendata[];

  pagename1:any;
  result1:any;
  msg:any;
  title2:any;
  content2:any;
  pageurl:string;
  url:SafeResourceUrl;
  
  
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService, public navParams: NavParams, public appCtrl: App,public sanitizer:DomSanitizer, public menu:MenuController ) {
  
  	
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
		this.pageurl = this.navParams.get("pageurl");
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);
	}
  
	
	
	  





}

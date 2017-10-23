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
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'safe' })
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

	
  tokenvalues:Tokendata[];

  pagename1:any;
  result1:any;
  msg:any;
  title2:any;
  content2:any;
  pageurl:string;
  title:any;
  url:any;
  
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService, public navParams: NavParams, public appCtrl: App,public sanitizer:DomSanitizer, public menu:MenuController ) {
  
  this.pageurl	=	'http://logicutilities.com/customer-service-mobile/';
  this.title	=	"Customer Services";
  	
	
	
				
			
		
	/*	this.app 		= 	app;
	this.nav 		= 	nav;
	this.menu		=	menu;
	this.navParams	=	navParams;
	this.sanitizer 	= 	sanitizer;  	
	*/
		
	
	
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

	
	
	service_tab()
	{
		$(".button").removeClass("current");
		$("#service_btn").addClass("current");

		this.title		=	"Customer Services";
		this.pageurl	=	"http://logicutilities.com/customer-service-mobile/";  
		this.url 		= this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);
	}	
  	contact_tab()
	{

		$(".button").removeClass("current");
		$("#contact_btn").addClass("current");

		this.title		=	"Contact Us";
		this.pageurl	=	"http://login.logicutilities.com/NewContactUs.aspx";
		this.url 		= this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);

	}	
  	location_tab()
	{
		$(".button").removeClass("current");
		$("#location_btn").addClass("current");
		 this.title		=	"Location";
	
		this.pageurl	=	"https://www.google.com/maps/d/embed?mid=1UWr4x1GoqRn6fzHP30L00TYk8Vo";
		
		
		this.url 		= this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);
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
		$(".button").removeClass("current");
		$("#service_btn").addClass("current");

		this.title		=	"Customer Services";
		this.pageurl	=	"http://logicutilities.com/customer-service-mobile/";  
		this.url 		= this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);
		
	}
  
	

	
	  


}

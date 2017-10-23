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

import { Storage } from '@ionic/storage';


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
  selector: 'page-termandcondition',
  templateUrl: 'termandcondition.html',
})
export class TermandconditionPage {

	url: SafeResourceUrl;
  tokenvalues:Tokendata[];

  pagename1:any;
  result1:any;
  msg:any;
  title2:any;
  content2:any;
  pageurl:string;

  CustomerID:any;
  TowerId:any;
  TowerName:any;
  LoginID:any;
  Password:any;
  mydata:any;
  customerdata:any;
  
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService, public navParams: NavParams, public appCtrl: App,public sanitizer:DomSanitizer, public menu:MenuController,public storage: Storage ) {
  
  	
		this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=		this.tokenvalues[0].accesstok;
		});
 
	
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
		
		
		this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=		this.tokenvalues[0].accesstok;
			
			this.CustomerID 	= 	this.customerdata['CustomerID'];
			this.TowerId 		= 	this.customerdata['TowerId'];
			this.TowerName 		= 	this.customerdata['TowerName'];
			this.LoginID 		= 	this.customerdata['LoginID'];
			this.Password 		= 	this.customerdata['Password'];
		
			this.pageurl	=	this.customerdata['base_url']+'TermsandConditionMobile.aspx?wskey=59eeb7e2ecbb5e67b9600316d2987896&CustomerID='+this.CustomerID+'&TowerId='+this.TowerId+'&TowerName='+this.TowerName;
			
			this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.pageurl);
		
		
		});
		
		
		//this.checkaccept();
						
		
		
	}

	
	checkaccept() 
	{
		var mythis	=	this;
		
		
	
	
		
		
		
	/*	var refreshIntervalId =setInterval(function (){
		
		
		
			
				mythis.tokendataService.gettokendata().then(tokenvalues => {
				
				
				mythis.tokenvalues 	= 	tokenvalues;
				
				mythis.customerdata	=	mythis.tokenvalues[0].accesstok;
				
			
				mythis.LoginID 		= 		mythis.customerdata['LoginID'];
				mythis.Password 	= 	mythis.customerdata['Password'];
			
				if(mythis.navCtrl.getActive().name=="TermandconditionPage")
				{
			
					var url=mythis.customerdata['base_url']+'ws/luwebservicemobile.asmx/LoginbyUserID?wsKey=59eeb7e2ecbb5e67b9600316d2987896&username='+mythis.LoginID+'&password='+mythis.Password+'&ipAddress=192.168.1.1';
					
					//var url='http://rentowe.com/api.php?wsKey=59eeb7e2ecbb5e67b9600316d2987896&username='+mythis.LoginID+'&password='+mythis.Password+'&ipAddress=192.168.1.1';
				
					
					
					   mythis.http.get(url)
					  .map(res => res.json())
					  .subscribe((data)=>
					  {
					  		
						
							if(data.ErrorNumber=="0")
							{
								mythis.mydata	=	$.parseJSON(data.ResponseResult);
								
								if(mythis.mydata['IsTermsConditionsAccepted']=="true" || mythis.mydata['IsTermsConditionsAccepted']==true)
								{
									
									mythis.mydata['base_url']	=	mythis.customerdata['base_url'];
										
									mythis.tokenvalues[0].accesstok=mythis.mydata;
									
										mythis.storage.get('tos_redirect').then((tos_redirect) => {
		 								
										
										 	mythis.storage.set('tos_redirect', '');
									//	 	mythis.appCtrl.getRootNav().setRoot(DashboardPage);
										 
											
										});	
										
									
								}
								else
								{
									
								
								}
								
								
							}
							else
							{
							
							}
							
						
							
					
						},error=>{
						
							
						
						});
				}
			});
			
		
				
		},5000);*/
	
	  
	}




}

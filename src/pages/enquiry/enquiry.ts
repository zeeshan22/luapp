import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController, App} from 'ionic-angular';

import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';

import {SettingPage } from '../setting/setting';

import {ComposePage } from '../compose/compose';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
//import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';



import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


import * as $ from 'jquery';

/**
 * Generated class for the EnquiryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {

	

result1			=	'';
customerdata	=	'';
tokenvalues:Tokendata[];
customerid		=	'';
msg				=	'';	
msgLabel		=	'';
loginid			=	'';
units			=	'';
unitNo2			=	'';	
towerName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController ,private tokendataService: TokendataService, public appCtrl: App ) {
  	
		
		this.tokendataService.gettokendata().then(tokenvalues => {
		
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=	this.tokenvalues[0].accesstok;
			/*------------------------------------------GETTING UNIT NUMBER---------------------------------------*/
			
			
			this.loginid		=	this.customerdata['LoginID'];
			
			this.towerName	=	this.customerdata['TowerName'];
			this.unitNo2			=	this.loginid;
			
			
			//var url2	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SubmitEnquiryRequest';
			var url		=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetCustomerAccountList_Mobile?wskey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.loginid+'&ipAddress=192.168.1.1';
			
			
			
			this.http.get(url).map(res => res.json()).subscribe((data)=>
			{
			
				console.log(data);
			
			
				
				if(data.ErrorNumber=="0")
				{
				
				
					this.units	=	$.parseJSON(data.ResponseResult);
		
					
				
				}
				else
				{
				
					this.msg	=	data.ErrorDescription;
					let alert 	= this.alertCtrl.create({
						title: 'Message',
						subTitle:data.ErrorDescription,
						buttons: ['Dismiss']
					});
					alert.present();
					
				
				}
			
			
			
			
			},error=>{
			
				
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:"The opertion couldn't be completed. Please contact administrator",
					buttons: ['Dismiss']
				});
				alert.present();
			
			});
			
			
			
			
			
			
			
			
			
			/*-------------------------------------------END GETTING UNIT NUMBER-----------------------------------------*/
			console.log(this.customerdata);
			this.customerid	=	this.customerdata['CustomerID'];
			
			
			
  	
	
		
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
	var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SearchEnquiryList?wskey=59eeb7e2ecbb5e67b9600316d2987896&om&towername=&apartmentno=&unitnumberid=&customerid='+this.customerid+'&ipAddress=192.168.1.1';
			
		
			
			this.http.get(url)
			.map(res => res.json())
			.subscribe((data)=>
			
			{
			
			console.log(data);
			
		
			
			if(data.ErrorNumber=="0")
			{
			
			
				this.result1	=	$.parseJSON(data.ResponseResult);
				console.log(this.result1);
				
				loading.dismiss();
			
			}
			else
			{
			
				this.msg	=	data.ErrorDescription;
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:data.ErrorDescription,
					buttons: ['Dismiss']
				});
				alert.present();
				loading.dismiss();
			
			}
			
			
			
			
			},error=>{
			
				loading.dismiss();
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:"The opertion couldn't be completed. Please contact administrator",
					buttons: ['Dismiss']
				});
				alert.present();
				
			});
		
		
	  
	  
			
	
		});
	//constructor
	
	}
	
	presentProfileModal() {
		$(".add_request_inner").show();
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymenthistoryPage');
  }
  view_details(myid)
  {
  	
  	
		
		
		
		if($("#item_"+myid).css('display')=="block")
		{
			
			$(".list_item").removeClass("list_item_bg");
		
			
			$("#item_"+myid).css('display',"none");
			
  		}
		else
		{
			
			$(".list_item").removeClass("list_item_bg");
			$("#main_"+myid).addClass("list_item_bg");
			
			
			$(".hide_item").hide();
			
			$("#item_"+myid).css('display',"block");
  		
		}
		
	
  
  }
  
	filter()
	{
	
		
			this.msgLabel	=	"Filtered ";
			
			let loading = 	this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
		var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SearchEnquiryList?wskey=59eeb7e2ecbb5e67b9600316d2987896&om&towername='+this.towerName+'&apartmentno='+this.unitNo2+'&unitnumberid='+this.unitNo2+'&customerid='+this.customerid+'&ipAddress=192.168.1.1';
			
	
			
			this.http.get(url)
			.map(res => res.json())
			.subscribe((data)=>
			
			{
			
			console.log(data);
			
		
			
			if(data.ErrorNumber=="0")
			{
			
			
				this.result1	=	$.parseJSON(data.ResponseResult);
				console.log(this.result1);
				
				loading.dismiss();
			
			}
			else
			{
			
				this.msg	=	data.ErrorDescription;
				let alert 	= 	this.alertCtrl.create({
					title: 'Error',
					subTitle:data.ErrorDescription,
					buttons: ['Dismiss']
				});
				alert.present();
				loading.dismiss();
			
			}
			
			
			
			
			},error=>{
			
				loading.dismiss();
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:"The opertion couldn't be completed. Please contact administrator",
					buttons: ['Dismiss']
				});
				alert.present();
				
			});
		
		
	  
	  
			
	
	
	
	
	}

  newcompose()
  {
	this.navCtrl.push(ComposePage);  	
  }
  msg_detail(msgid)
  {
		
		
	
		$(".msg_details").hide();
		setTimeout(function (){$(".msg_details_"+msgid).show();},500);
  }
  goto_dashboard()
  {
		this.navCtrl.setRoot(DashboardPage);
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
		//this.navCtrl.push(EnquiryPage);
	}



}

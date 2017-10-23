import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController, App} from 'ionic-angular';

import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';

import {SettingPage } from '../setting/setting';

import {ComposePage } from '../compose/compose';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
//import {InboxPage} from '../inbox/inbox';




import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';

import * as $ from 'jquery';

/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

	
result1			=	'';
customerdata	=	'';
tokenvalues:Tokendata[];
loginid			=	'';
msg				=	'';
unitNo			=	'';	
units			=	'';	
msgLabel		=	'Last ';


  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController ,private tokendataService: TokendataService,public appCtrl: App) {
  		/*---- gettting Account----*/
		
		
		
		tokendataService.gettokendata().then(tokenvalues => {
		
			this.tokenvalues 	=	tokenvalues;
			
			this.customerdata	=	this.tokenvalues[0].accesstok;
			this.loginid		=	this.customerdata['LoginID'];
			
			this.unitNo			=	this.loginid+'_extra';
			
			
			console.log(this.customerdata);
			
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			//loading.present();
			
			//var url2	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SubmitEnquiryRequest';
			var url		=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetCustomerAccountList_Mobile?wskey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.loginid+'&ipAddress=192.168.1.1';
			
			
			
			this.http.get(url).map(res => res.json()).subscribe((data)=>
			{
			
			console.log(data);
			
			
			
			if(data.ErrorNumber=="0")
			{
			
			
			this.units	=	$.parseJSON(data.ResponseResult);
			console.log(this.result1);
			loading.dismiss();
			
			}
			else
			{
			
			this.msg	=	data.ErrorDescription;
			let alert 	= this.alertCtrl.create({
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
		/*--------------------------*/
		
		this.tokendataService.gettokendata().then(tokenvalues => {
		
			this.tokenvalues 	= 	tokenvalues;
			
			this.customerdata	=	this.tokenvalues[0].accesstok;
			console.log(this.customerdata);
			this.loginid		=	this.customerdata['LoginID'];
			
			
			
  	
	
		
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetCustomerInboxMessages?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.loginid+'&messageId=0&messageType=I&specialParam=&ipAddress=192.168.1.1';
			
	
			
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
		
		
	  
	  
			
	
		});
	
	
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
  newcompose()
  {
	this.navCtrl.push(ComposePage);  	
  }
  msg_detail(msgid)
  {
		
		
		
		/*let loading = this.loadingCtrl.create({content: 'Please wait...'});
		loading.present();
	
var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetCustomerInboxMessages?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid=DITEST1234&messageId=406648&messageType=I&specialParam=&ipAddress=192.168.1.1';
		
	
		
		this.http.get(url)
		.map(res => res.json())
		.subscribe((data)=>
		
		{
		
		console.log(data);
		
	
		
		if(data.ErrorNumber=="0")
		{
		
		
			this.msg	=	$.parseJSON(data.ResponseResult);
			
			
		
			
			$(".msg_details_"+msgid).show();
			
			loading.dismiss();
		
		}
		else
		{
		
			
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
				subTitle:'error connection',
				buttons: ['Dismiss']
			});
			alert.present();
			
		});	*/
		if($(".msg_details_"+msgid).css("display")=="block")
		{
			$(".msg_details_"+msgid).css("display","none");
		}
		else
		{
			$(".msg_details").hide();
			setTimeout(function (){$(".msg_details_"+msgid).css("display","block");},50);
  		}
  }
 
	filter()
	{
	
		
			this.msgLabel	=	"Filtered ";
			
			let loading = 	this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			var temp		=	this.unitNo.split("_extra");
			var myunit_no	=	temp[0];
	var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetCustomerInboxMessages?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+myunit_no+'&messageId=0&messageType=I&specialParam=&ipAddress=192.168.1.1';
			
	
			
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

	home()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	inbox()
	{
		//this.navCtrl.push(InboxPage);
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

import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController,App } from 'ionic-angular';

import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';

import {ProfilePage } from '../profile/profile';
import {ProfilehistoryPage} from '../profilehistory/profilehistory';


import {SettingPage } from '../setting/setting';

import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';

import * as $ from 'jquery';

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


/**
 * Generated class for the PaymenthistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profiledoc',
  templateUrl: 'profiledoc.html',
})
export class Profiledoc {


result1			=	'';
result2			=	'';
customerdata	=	'';
tokenvalues:Tokendata[];
loginid			=	'';


  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController ,private tokendataService: TokendataService , public appCtrl: App ) {}
  
  ionViewDidLoad() {
		
		
  	
			this.loginid = this.navParams.get("accountid");
	
			this.tokendataService.gettokendata().then(tokenvalues => {
				this.tokenvalues = tokenvalues;
				
				this.customerdata	=	this.tokenvalues[0].accesstok;
				
			
				let loading = this.loadingCtrl.create({content: 'Please wait...'});
				loading.present();
				
				var url	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetAccountDocumentList?wskey=59eeb7e2ecbb5e67b9600316d2987896&accountnumber='
							+this.loginid+'&ipAddress=192.168.1.1';
				
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
					
				});
			
			
			});
		
  
  		

  
  
  
		
	}
  
  
  goto_profile()
  {
  	 this.navCtrl.push(ProfilePage);
  
  }
  goto_history()
  {
  	 this.navCtrl.push(ProfilehistoryPage);
  
  }
	presentProfileModal() {
		/*  let alert = this.alertCtrl.create({
			title: 'Low battery',
			subTitle: '10% of battery remaining',
			buttons: ['Dismiss']
		 });
		 alert.present();*/
		
		 $(".add_request_inner").show();
	}
	
	
	
	
	view_details(myid,account_number)
	{
		if($(".item_"+myid).css('display')=="block")
		{
			
			$(".list_item").removeClass("list_item_bg");
		
			
			$(".item_"+myid).css('display',"none");
			
  		}
		else
		{
			
			$(".list_item").removeClass("list_item_bg");
			$(".main_"+myid).addClass("list_item_bg");
			
			
			$(".hide_item").hide();
			$(".item_"+myid).css('display',"block");
  		
		}
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
		this.navCtrl.push(EnquiryPage);
	}



}

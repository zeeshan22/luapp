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
  selector: 'page-scheduleofcharges',
  templateUrl: 'scheduleofcharges.html',
})
export class ScheduleofchargesPage {



 	
result1			=	'';
customerdata	=	'';
tokenvalues:Tokendata[];
loginid			=	'';
msg				=	'';
unitNo			=	'';	
units			=	'';	
msgLabel		=	'Last ';
towerid			=	'';

  
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService, public navParams: NavParams, public appCtrl: App) {
  
  
	/*---- gettting Account----*/
		
		
		
		tokendataService.gettokendata().then(tokenvalues => {
		this.tokenvalues = tokenvalues;
		
		this.customerdata	=	this.tokenvalues[0].accesstok;
		this.towerid		=	this.customerdata['TowerId'];
		
		this.unitNo			=	this.loginid;
		console.log(this.customerdata);
		
		let loading = this.loadingCtrl.create({content: 'Please wait...'});
		//loading.present();
		
		var url		= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetScheduleChargesByTowerId?wsKey=59eeb7e2ecbb5e67b9600316d2987896&towerId='+this.towerid+'&specialParam=&ipAddress=192.168.1.1';
		
		
		
		this.http.get(url).map(res => res.json()).subscribe((data)=>
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
	
	setTimeout(function (){
		
		$(".my_div").show();
		$('.my_div *').removeAttr('width');
		//$(".MsoNormalTable").css("width","100%");
		$('.my_div *').removeAttr('nowrap');
		
	},500);
	
		


	

}
  
	
	
	  


}

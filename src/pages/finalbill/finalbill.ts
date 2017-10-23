import { Component } from '@angular/core';


import { NavController, NavParams , LoadingController,AlertController,App} from 'ionic-angular';
import { Http ,Headers} from '@angular/http';


import {DashboardPage} from '../dashboard/dashboard';
import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';
import {FinalbillreqPage} from '../finalbillreq/finalbillreq';





import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


import * as $ from 'jquery';



/**
 * Generated class for the FinalbillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-finalbill',
  templateUrl: 'finalbill.html',
})
export class FinalbillPage {

 
  	result1			=	'';
	tokenvalues:Tokendata[];
	customerdata 	=	'';
	customerid		=	'';
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController,private tokendataService: TokendataService, public appCtrl: App ) {
  
  
  
  	this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=	this.tokenvalues[0].accesstok;
			console.log(this.customerdata);
			this.customerid	=	this.customerdata['CustomerID'];
			
			
			
			
			
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
			var url	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetListofFinalBill?wskey=59eeb7e2ecbb5e67b9600316d2987896&customername='+this.customerdata['CUSTNAME']+'&email=&accountnumber=&contactno=&towername=&apartmentno=&customerid='+this.customerdata['CustomerID']+'&ipAddress=192.168.1.1';
			//var url		=	'http://newdev.caftan.ae/api/index.php?action=GetListofFinalBill&wskey=59eeb7e2ecbb5e67b9600316d2987896&customerid=670';
			
		
			
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
					subTitle:"The opertion couldn't be completed. Please contact administrator",
					buttons: ['Dismiss']
				});
				alert.present();
			
			});
		
	
			
			
			
			
			
			
			
			
			
			
			
			
			
			});
  
  
  
  
  
  
  
  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalbillPage');
  }
  
	view_details(myid)
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
	
	
	
	bill_request(data)
	{
		this.navCtrl.push(FinalbillreqPage,{mydata:data});
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

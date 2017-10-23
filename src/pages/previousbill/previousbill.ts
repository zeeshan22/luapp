	import { Component } from '@angular/core';
	import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController } from 'ionic-angular';
	
	import { Http ,Headers} from '@angular/http';
	import { Renderer } from '@angular/core';
	
	import {Tokendata} from '../../app/tokendata';
	import { TokendataService} from '../../app/tokendata.service';

	
	import {SettingPage } from '../setting/setting';
	import {NetworkPage } from '../network/network';
	
	import {DashboardPage } from '../dashboard/dashboard';
	
	import * as $ from 'jquery';
/**
 * Generated class for the NetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-previousbill',
  templateUrl: 'previousbill.html',
})
export class PreviousbillPage {

	
	
	
		result1				=	'';
		tokenvalues:Tokendata[];
		customerdata 		=	'';
		account				=	'';
		msg					=	'';
	
		constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController ,private tokendataService: TokendataService ) {
  	
		
			this.tokendataService.gettokendata().then(tokenvalues => {
				this.tokenvalues = tokenvalues;
				
				this.customerdata	=	this.tokenvalues[0].accesstok;
				console.log(this.customerdata);
				this.account	=	this.customerdata['LoginID'];
				
		
				
				let loading = this.loadingCtrl.create({content: 'Please wait...'});
				loading.present();
				
				var url	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetLatestBillingInvoices_Mobile?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.account+'&customerAccountNumber=&invoiceNumber=&getBySpecialParam=&ipAddress=192.168.1.1';
				
			
				
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
					let alert 	=	this.alertCtrl.create({
						title: 'Error ',
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
	
			$(".hide_item").hide();
			$(".item_"+myid).show();
	  
	  }
	  current_bill()
	  {
	  	this.navCtrl.push(NetworkPage);
	  }
	  
	  
	  
	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	prev_invoice(i)
	{
		var ii	=	i+1;
		if($(".myinv_"+ii).length>0)
		{
			$(".inv_div").hide();
			$(".myinv_"+ii).show();
		}
	}
	
	
	


}

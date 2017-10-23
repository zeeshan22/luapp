  	import { Component } from '@angular/core';
	
	import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController, App } from 'ionic-angular';
	import { InAppBrowser } from '@ionic-native/in-app-browser';
	
	
	import { Http ,Headers} from '@angular/http';
	import { Renderer } from '@angular/core';
	
	import {Tokendata} from '../../app/tokendata';
	import { TokendataService} from '../../app/tokendata.service';

	
	import {SettingPage } from '../setting/setting';
	import {PreviousbillPage } from '../previousbill/previousbill';
	import {BilldetailsPage} from '../billdetails/billdetails';
	
	import {PaymentPage} from '../payment/payment';

	
	import {DashboardPage} from '../dashboard/dashboard';
//	import {NetworkPage } from '../network/network'; 
	import {EnquiryPage } from '../enquiry/enquiry';
	import {InboxPage} from '../inbox/inbox';
	import {PaymenthistoryPage} from '../paymenthistory/paymenthistory';
	
	
	

	
	import * as $ from 'jquery';
/**
 * Generated class for the NetworkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {

	
	
		result1				=	'';
		tokenvalues:Tokendata[];
		customerdata 		=	'';
		account				=	'';
		msg					=	'';
		CustomerID			=	'';
		LoginID				=	'';
		myurl_togo			=	'';
		invurl				=	'';
		base_url			=	'';
	
	/*	
		 options : theInAppBrowser = {
			location : 'yes',//Or 'no' 
			hidden : 'no', //Or  'yes'
			clearcache : 'yes',
			clearsessioncache : 'yes',
			zoom : 'yes',//Android only ,shows browser zoom controls 
			hardwareback : 'yes',
			mediaPlaybackRequiresUserAction : 'no',
			shouldPauseOnSuspend : 'no', //Android only 
			closebuttoncaption : 'Close', //iOS only
			disallowoverscroll : 'no', //iOS only 
			toolbar : 'yes', //iOS only 
			enableViewportScale : 'no', //iOS only 
			allowInlineMediaPlayback : 'no',//iOS only 
			presentationstyle : 'pagesheet',//iOS only 
			fullscreen : 'yes',//Windows only    
		};*/
		
		constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController, public 		modalCtrl: ModalController ,private tokendataService: TokendataService ,  public appCtrl: App,public theInAppBrowser:InAppBrowser) {
		
			/*------------Getting setting the logged user value to customerdata-----------*/
			this.tokendataService.gettokendata().then(tokenvalues => {
			
				
				this.tokenvalues = tokenvalues;
				
				this.customerdata	=	this.tokenvalues[0].accesstok;
				console.log(this.customerdata);

				this.account	=	this.customerdata['LoginID'];
				this.LoginID	=	this.customerdata['LoginID'];
				this.CustomerID	=	this.customerdata['CustomerID'];
			
				this.invurl			=	this.customerdata['base_url']+'payment/PaymentRequestNIapp.aspx?wskey=59eeb7e2ecbb5e67b9600316d2987896';					
				this.base_url		=	this.customerdata['base_url'];
				
				let loading = this.loadingCtrl.create({content: 'Please wait...'});
				loading.present();
				
				var url	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetLatestBillingInvoices_Mobile?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.account+'&customerAccountNumber=&invoiceNumber=0&getBySpecialParam=&ipAddress=192.168.1.1';
				
			
				
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
		
		
		public openWithInAppBrowser(){
			let target = "_blank";
			this.myurl_togo	=	'http://logicutilities.com/';
			this.theInAppBrowser.create(this.myurl_togo,target, 'toolbar=yes,location=yes,closebuttoncaption=My button');
		}
		public openWithInAppBrowser2(url : string){
			let target = "_blank";
			this.theInAppBrowser.create(url, '_blank', 'location=no,toolbar=no,clearsessioncache=yes,clearcache=yes,fullscreen=yes')
		}
		
		  
		
		
		presentProfileModal() {
		
		
		 $(".add_request_inner").show();
		}
	  ionViewDidLoad() {
		console.log('ionViewDidLoad PaymenthistoryPage');
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
			$("#main222_"+myid).addClass("list_item_bg");
			
			
			$(".hide_item").hide();
			$(".item_"+myid).css('display',"block");
  			
		}
			
	}
	  
	previous_bill()
	{
		this.navCtrl.push(PreviousbillPage);
	}
	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}
	bill_detail(myaccount)
	{
	
		this.navCtrl.push(BilldetailsPage,{myaccountNo:myaccount});;
	}
	
	checkbox_click(myid)
	{
		
		if($(".amount_item_"+myid).hasClass("checked"))
		{
			$(".amount_item_"+myid).removeClass("checked");
			$("#main3_"+myid+" ").find(".tick").hide();
			$("#main3_"+myid+" ").find(".word").show();
			
			//$(".amount_hide_item").hide();
			$(".amount_item_"+myid).hide();
			
			
		}
		else
		{
			
			$(".amount_item_"+myid).addClass("checked");
			$("#main3_"+myid+" ").find(".tick").show();
			$("#main3_"+myid+" ").find(".word").hide();
			
			//$(".amount_hide_item").hide();
			$(".amount_item_"+myid).show();
  		}
		var total	=	0;
		var amt		=	0;
		$(".checked").each(function (){
			if($(this).find(".bill_amount").val()!="" && parseInt($(this).find(".bill_amount").val())>0)
			{
				
				amt		=	parseFloat($(this).find(".bill_amount").val());
				total	=	total+amt;
			}
		});
		$(".bill_amount_total").html(total);
	}
	amount_keyup()
	{
		var total	=	0;
		var amt		=	0;
		$(".checked").each(function (){
			if($(this).find(".bill_amount").val()!="" && parseInt($(this).find(".bill_amount").val())>0)
			{
				
				amt		=	parseFloat($(this).find(".bill_amount").val());
				total	=	total+amt;
			}
		});
		$(".bill_amount_total").html(total);
	}
	
	
	
	abc1()
	{
		//alert('');
	}
	pad2(n) { return n < 10 ? '0' + n : n }
	paynow()
	{
	
		var less_zero_error	=	0;
	
		
		var	mythis	=	this;
			
	
		
		if($(".checked").length==1 && $(".bill_amount_total").html()!="" && parseInt($(".bill_amount_total").html())>0 )
		{
			
			var myid	=	$(".checked").find('.myid').val();
			
			
			this.pay_now_single(myid);	
		}
		else if($(".checked").length>0 && $(".bill_amount_total").html()!="" && parseInt($(".bill_amount_total").html())>0 )
		{
		
			var myurl		=	'';
			var customerid	=	'0';
			
			if($(".checked").length==1)
			{
				customerid	=	$(".checked .customerid").val();
			}
			
			
			
	
			var date = new Date();
	
	
	
	
			var total	=	0;
			var ref_num	=	this.LoginID+"_"+ date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2( date.getDate()) + this.pad2( date.getHours() ) + this.pad2( date.getMinutes() ) + this.pad2( date.getSeconds() );
			
			
				
			var abc	=	this.http;
			
			
			/*-------------------------------	Zero	Validation----------------------------------------*/
			
			$(".checked").each(function(){
			
				var bill_amount	=	$(this).find('.bill_amount').val();
				
				if(parseInt(bill_amount)<=0)
				{
					less_zero_error	=	less_zero_error+1;
				}
			
			});
			
			
			
			/*---------------------------------END OF Validation-----------------------------------------------*/
			if(less_zero_error==0)
			{
			
				$(".checked").each(function(){
				
				
				
					var inv_no		=	$(this).find('.inv_no').val();
					var bill_amount	=	$(this).find('.bill_amount').val();
					
					total			=	total+parseFloat(bill_amount);
					
					var month			=	$(this).find('.month').val();
					var acctnum			=	$(this).find('.acctnum').val();
					var building_name	=	$(this).find('.building_name').val();
					var unit_no			=	$(this).find('.unit_no').val();
					var unit_id			=	$(this).find('.unit_id').val();
					var customerid		=	$(this).find('.customerid').val();
					/*----------------------------------------------------------------*/
					
					var url		=		mythis.customerdata['base_url']+'ws/luwebservicemobile.asmx/PaymentRequestforSelectedInvoices_Mobile?wskey=59eeb7e2ecbb5e67b9600316d2987896&invoiceNo='
						+inv_no+'&month='+month+'&acctnum='+acctnum+'&BuildingName='+building_name+'&UnitNumber='+unit_no+'&UnitId='+unit_id+'&Amount='+bill_amount+'&CustomerID='+customerid+'&refNum='+ref_num+'&ipAddress=192.168.1.1';
						
						abc.get(url)
						.map(res => res.json())
						.subscribe((data)=>
						{
							
					
						
						},error=>{
						
						
							
						});
					
					
					/*----------------------------------------------------------------*/
					
					myurl			=	myurl+'invoice-'+inv_no+'_'+bill_amount+',';
					
				});
			
		
				myurl	= 	myurl.replace(/,(\s+)?$/, '');	
				myurl	=	mythis.invurl+"&InvoiceId=0"+"&PayAmount="+total+"&Customerid="+mythis.CustomerID+"&AccountNumber="+mythis.LoginID+"&sourcePayment=android&paymentType=paybymobile&refNum="+ref_num+"&paymentLevel=multi";
			
			
			
			
				//window.alert(myurl);
				mythis.navCtrl.push(PaymentPage,{pageurl:myurl});
				
				
				
		
			}
			else
			{
				
				window.alert("Invalid Payment Amount");
				
			}
		
		}
		else
		{
		
			if($(".bill_amount_total").html()!="" && parseInt($(".bill_amount_total").html())<=0)
			{
				alert("Amount Should Be Greater Then 0");	
			}
			else
			{
				
					alert("Please select any invoice");	
					
			}
			
		}
	}
	
	pay_now_single(myid)
	{
		
		
		
			var	mythis	=	this.theInAppBrowser;
			
		
			var inv_no			=	$(".amount_item_"+myid).find('.inv_no').val();
			var bill_amount		=	$(".amount_item_"+myid).find('.bill_amount').val();
			
			
			
			var month			=	$(".amount_item_"+myid).find('.month').val();
			var acctnum			=	$(".amount_item_"+myid).find('.acctnum').val();
			var building_name	=	$(".amount_item_"+myid).find('.building_name').val();
			var unit_no			=	$(".amount_item_"+myid).find('.unit_no').val();
			var unit_id			=	$(".amount_item_"+myid).find('.unit_id').val();
			var customerid		=	$(".amount_item_"+myid).find('.customerid').val();
			
			
			
			
		
			setTimeout(function (){
			
			
				if(parseInt(bill_amount)>0)
				{
					$(".alert-input-group input").val(bill_amount);
				}
				else
				{
					$(".alert-input-group input").val('0');
				}
			
			},500);
		
			const alert = this.alertCtrl.create({
				
				title: 'Confirm Payment',
				message: ' Enter Payment Amount',
				inputs: [
				{
					name: 'Amount',
					placeholder: 'Amount',
				
					
				},
			],
			buttons: [
			{
				text: 'Cancel',
				cssClass: 'alertCustomCss',
				handler: data => {
						console.log('Cancel clicked');
					}
				},
			{
				text: 'Paynow',
				cssClass: 'paynowbtn',
				handler: data => {
					
					
					
					
					
					var popamount	=	$(".alert-input-group input").val();
					if(parseInt(popamount)>0)
					{
						var date = new Date();
			
			
						var ref_num	=		acctnum+"_"+ date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2( date.getDate()) + this.pad2( date.getHours() ) + this.pad2( date.getMinutes() ) + this.pad2( date.getSeconds() );
						var	myurl	= this.invurl+"&InvoiceId="+inv_no+"&PayAmount="+popamount+"&Customerid="+customerid+"&AccountNumber="+acctnum+"&sourcePayment=android&paymentType=paybymobile&refNum="+ref_num+"&paymentLevel=single";
						
					
						this.navCtrl.push(PaymentPage,{pageurl:myurl});
						
						
					
					}
					else
					{
						window.alert('Invalid Invoice Amount');
					}
				
					}
				}
			]
			
			
		});
		alert.present();
	
		
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

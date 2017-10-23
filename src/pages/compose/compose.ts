import { Component } from '@angular/core';


import { NavController, NavParams , LoadingController,AlertController} from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import {DashboardPage } from '../dashboard/dashboard';
import {EnquiryPage } from '../enquiry/enquiry';

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';


import * as $ from 'jquery';

/**
 * Generated class for the ComposePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-compose',
  templateUrl: 'compose.html',
})
export class ComposePage {


 
  	result1			=	'';
	units			=	'';
	tokenvalues:Tokendata[];
	customerdata 	=	'';
	customerid		=	'';
	msg				=	'';
	
	
	towerName:any;
	unitNo:any;
	subject:any;
	message:any;	
	customer:any;
	loginid:any;
	
	
	clean()
	{
			this.towerName	=	this.customerdata['TowerName'];
			this.unitNo		=	"0";
			this.subject	=	"";
			this.message	=	"";
	}
	fill()
	{
			this.towerName	=	this.customerdata['TowerName'];
			this.unitNo		=	"DI1002T3";
			this.subject	=	"hello subject";
			this.message	=	"hello message";
	
	}
  
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private http: Http, private alertCtrl: AlertController,private tokendataService: TokendataService ) {
	
	
  
  
	tokendataService.gettokendata().then(tokenvalues => {
	this.tokenvalues = tokenvalues;
	
	this.customerdata	=	this.tokenvalues[0].accesstok;
	this.loginid		=	this.customerdata['LoginID'];

	this.clean();
	
	console.log(this.customerdata);
	
	let loading = this.loadingCtrl.create({content: 'Please wait...'});
	loading.present();
	
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
				title: 'Message',
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
  
   validate()
  {
  		
		
	
		var error	=	'0';
		if(this.towerName=="0")
		{
			alert("Please Select Tower Name");
			error	=	'1';
			return false;
		}
		if(this.unitNo=="0")
		{
			alert("Please Select Unit No");
			error	=	'1'
			return false;
		}
		
		if(this.subject=="")
		{
			alert("Please Enter Subject");
			error	=	'1'
			return false;
		}
		if(this.message=="")
		{
			alert("Please Enter Message");
			error	=	'1'
			return false;
		}
		
		
		
		
		if(error=="0")
		{
			return true;
		}
		
		
  }
  
  send2()
  {
	this.tokendataService.gettokendata().then(tokenvalues => {
	this.tokenvalues = tokenvalues;
	
	this.customerdata	=	this.tokenvalues[0].accesstok;


	var url2	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SubmitEnquiryRequest';
	var url		=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SubmitEnquiryRequest?wsKey=59eeb7e2ecbb5e67b9600316d2987896&customerID=670&accountNumber=DI109T2&towerName=diamond&subjectValue=1&subjectText=hadsa&message=DDSA&unitList=&receiptName1=&receiptBase64Data1=&receiptName2=&receiptBase64Data2=&receiptName3=&receiptBase64Data3=&ipAddress=172.22.1.1';
	
	
	var str2	=	"?";
	$.each(data1,function (index,val){
		str2	=	str2+index+"="+val+"&";	
	});	
	
	var data1 =
	{
	
		'wskey':'59eeb7e2ecbb5e67b9600316d2987896',
		'ipAddress':'192.168.1.1',
		'customerID':this.customerdata['CustomerID'] ,
		'accountNumber':this.unitNo ,
		'towerName':this.towerName ,
		
		'subjectValue':"1",
		
		'subjectText':this.subject,
		'message':this.message,
		
		"unitList":'',
		"receiptName1":'aaaaaaaaaaaa',
		"receiptBase64Data1":'',
		
		"receiptName2":'',
		"receiptBase64Data2":'',
		
		"receiptName3":'',
		"receiptBase64Data3":'',
		
	
	
	}
	
	/*
	*/
	
	var str2	=	"?";
	$.each(data1,function (index,val){
		str2	=	str2+index+"="+val+"&";	
	});	
	if(this.validate() )
	{	
		
		let loading = this.loadingCtrl.create({content: 'Please wait...'});
		loading.present();
		
		this.http.get(url2+str2).map(res => res.json()).subscribe((data)=>
		{
		
			console.log(data);
		
			
			
			if(data.ErrorNumber=="0")
			{
			
		
				let alert 	= this.alertCtrl.create({
					title: 'Message',
					subTitle:data.ResponseSuccessMessage,
					buttons: [{
								text: 'OK',
								role: 'ok',
								handler: () => {
									this.navCtrl.push(EnquiryPage);
								}
							 }]
				});
				alert.present();
				
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
				this.fill();
			
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
	
	
	});
  
  }
  
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad FinalbillPage');
		
		
	}
	
	
	goto_dashboard()
	{
		this.navCtrl.setRoot(DashboardPage);
	}



  
  

 
}
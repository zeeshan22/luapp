import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController } from 'ionic-angular';
//import { DatePicker } from '@ionic-native/date-picker';


import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';
import {FinalbillPage} from '../finalbill/finalbill';


import {Tokendata} from '../../app/tokendata';
import { File } from '@ionic-native/file';

import { TokendataService} from '../../app/tokendata.service';

import * as $ from 'jquery';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-finalbillreq',
  templateUrl: 'finalbillreq.html',
  providers: [TokendataService]
})
export class FinalbillreqPage {
	
  towername:any;
  unitno:any;
  accountid:any;
  fullname:any;
  email:any;
  contactno:any; 
  requested_date:any;

   
  move_in_data:any;
  move_out_data:any;
  noc_request:any;
  noc_fee:any;
  temp_noc_fee:any;
  comment:any;
  
  mydata:any;
  result1:any;
  
  customerid:any;
  
  customerdata	=	'';
  tokenvalues:Tokendata[];

	
  
  
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,private file: File,private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController, public navParams: NavParams  ,  private tokendataService: TokendataService ) {
  
  
  		this.noc_request	=	0;
		this.noc_fee		=	'0';
		
		this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=	this.tokenvalues[0].accesstok;
		});
	
	}
	
	ionViewDidLoad() 
	{
	
		  this.mydata 	=	this.navParams.get("mydata");
		  console.log(this.mydata);
		
		 
		 
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
			var url	= this.customerdata['base_url']+'ws/luwebservicemobile.asmx/GetListofFinalBill?wskey=59eeb7e2ecbb5e67b9600316d2987896&customername=&email=&accountnumber='+this.mydata['accountno']+'&contactno=&towername=&apartmentno=&customerid='+this.mydata['CustomerID']+'&ipAddress=192.168.1.1';
			
			
		
			this.http.get(url)
			.map(res => res.json())
			.subscribe((data)=>
			{
				console.log(data);
				if(data.ErrorNumber=="0")
				{
				
				
					this.result1	=	$.parseJSON(data.ResponseResult);
				
					console.log(this.result1);
					
					this.customerid =	this.result1[0].CustomerID;
				
					 this.towername	=	this.result1[0].TowerName;	
					 this.unitno	=	this.result1[0].flatno;	
					 this.accountid	=	this.result1[0].accountno;	
					 this.fullname	=	this.result1[0].CUSTNAME;	
					 this.email		=	this.result1[0].EMAIL;	
					 this.contactno	=	this.result1[0].PHONE;	
					 
					 
					 this.noc_fee		=	this.result1[0].NOCFee;	
					 this.noc_request	=	this.result1[0].NOCRequest;
					 
					 
					 var dt = new Date();  

					var month = dt.getMonth()+1;  
					var day = dt.getDate();  
					var year = dt.getFullYear();  
					 	
					 
					 
					 this.requested_date	=	(this.result1[0].RequestedDate!="1900-01-01T00:00:00" && this.result1[0].RequestedDate!="")?this.result1[0].RequestedDate:(day+ '-'+ month+'-' + year);	
					 this.move_in_data	=	(this.result1[0].MoveInDate!="1900-01-01T00:00:00")?this.result1[0].MoveInDate:'';	
					 this.move_out_data	=	(this.result1[0].CreateDate!="1900-01-01T00:00:00")?this.result1[0].CreateDate:'';
					 	
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
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		  
	
	}
  
  validate()
  {
  		var error	=	'0';
		
			
					
					 
		
		if(this.towername=="")
		{
			alert("Please Enter Tower Name");
			error	=	'1'
			return false;
		}
		if(this.unitno=="")
		{
			alert("Please Enter Unit No");
			error	=	'1'
			return false;
		}
		if(this.accountid=="")
		{
			alert("Please Enter Account No");
			error	=	'1'
			return false;
		}
		if(this.fullname=="")
		{
			alert("Please Enter Full Name");
			error	=	'1'
			return false;
		}
		if(this.email=="")
		{
			alert("Please Enter Email");
			error	=	'1'
			return false;
		}
		if(this.requested_date=="")
		{
			alert("Please Enter Request Date");
			error	=	'1'
			return false;
		}
		if(this.move_in_data=="")
		{
			alert("Please Enter MoveIn Date");
			error	=	'1'
			return false;
		}
		if(this.move_out_data=="")
		{
			alert("Please Enter MoveOut Date");
			error	=	'1'
			return false;
		}
		
		if(this.noc_request=="0")
		{
			alert("Please Select NOC Request");
			error	=	'1'
			return false;
		}
		
		if(this.noc_fee=="")
		{
			alert("Please Enter NOC Fee");
			error	=	'1'
			return false;
		}
		
		if(this.comment=="")
		{
			alert("Please Enter Comment");
			error	=	'1'
			return false;
		}
		
		
		
		if(error=="0")
		{
			return true;
		}
		
		
  }
  
  submit_req(){





 		var url1 	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/SubmitFinalBillRequest';
 
		/*
		https://login.logicutilities.com/ws/luwebservicemobile.asmx/SubmitFinalBillRequest?wskey=59eeb7e2ecbb5e67b9600316d2987896&accountNumber=DITEST1234&moveOutDate=01/10/2017&utilizeSecurityDeosit=false&agreeSettle=false&comment=&towerName=Diamond&customerName=&contractNumber=&email=&unitNo=&nocRequest=true&NOCFee=&CustomerID=593&ipAddress=192.168.1.1
		*/
		
		var data1 =
		{
			'wskey':'59eeb7e2ecbb5e67b9600316d2987896',
			
			
			'accountNumber': this.accountid,
			'CustomerID': this.customerid,
			'moveOutDate': this.move_out_data,
			'utilizeSecurityDeosit':false,
			'agreeSettle':false,
			
			'comment': this.comment,
			'towerName': this.towername,
			'customerName': this.fullname,
			'contractNumber':this.contactno,
			'email': this.email,
			'unitNo': this.unitno,
			'nocRequest':this.noc_request,
			'NOCFee':this.noc_fee,
			'ipAddress':'192.168.1.1',
			
			
			
		
			
		
		}
	/*
	
	this.customerid =	this.result1[0].CustomerID;
	
	this.towername	=	this.result1[0].TowerName;	
	this.unitno	=	this.result1[0].flatno;	
	this.accountid	=	this.result1[0].accountno;	
	this.fullname	=	this.result1[0].CUSTNAME;	
	this.email		=	this.result1[0].EMAIL;	
	this.contactno	=	this.result1[0].PHONE;	
	
	
	this.noc_fee		=	this.result1[0].NOCFee;	
	this.noc_request	=	this.result1[0].NOCRequest;
	
	
	var dt = new Date();  
	
	var month = dt.getMonth()+1;  
	var day = dt.getDate();  
	var year = dt.getFullYear();  
	
	
	
	this.requested_date	=	(this.result1[0].RequestedDate!="1900-01-01T00:00:00" && this.result1[0].RequestedDate!="")?this.result1[0].RequestedDate:(day+ '-'+ month+'-' + year);	
	this.move_in_data	=	(this.result1[0].MoveInDate!="1900-01-01T00:00:00")?this.result1[0].MoveInDate:'';	
	this.move_out_data	=	(this.result1[0].CreateDate!="1900-01-01T00:00:00")?this.result1[0].CreateDate:'';
	
	*/
		
		var str2	=	"?";
		$.each(data1,function (index,val){
			str2	=	str2+index+"="+val+"&";	
		});	
		
		
		if(this.validate() )
		{
		
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			
	
			
			this.http.get(url1+str2).map(res => res.json()).subscribe((data)=>
			{	
			
				console.log(data);
				
				if(data.ErrorNumber=="0")
				{
					
					
					let alert = this.alertCtrl.create({title: 'Success',subTitle:data.ResponseSuccessMessage,buttons: [
					{
						text: 'OK',
						role: 'ok',
						handler: () => {
							this.navCtrl.push(FinalbillPage);
						}
					 }
							 
					]});alert.present();loading.dismiss();
					
				}
				else
				{
					let alert = this.alertCtrl.create({title: 'Error',subTitle:data.ErrorDescription,buttons: ['Dismiss']});alert.present();loading.dismiss();
				}
			
			},error=>{
				loading.dismiss();let alert = this.alertCtrl.create({title: 'Error',subTitle:"The operation could not be completed. Please contact administrator.",buttons: ['Dismiss']});alert.present();
				
			});
		}
		else

		{
		
		}
	}
	noc_change()
	{
	
		
		if(this.noc_request=="true" || this.noc_request==true)
		{
			$(".fee").show();
			this.noc_fee	=	this.temp_noc_fee;
		}
		else
		{
			$(".fee").hide();
			this.noc_fee	=	'';
		}
		
	}
	

  
  
	
	
  
}

import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController } from 'ionic-angular';
//import { DatePicker } from '@ionic-native/date-picker';


import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';
import {ProfilePage} from '../profile/profile';


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
  selector: 'page-profileupdate',
  templateUrl: 'profileupdate.html',
  providers: [TokendataService]
})
export class ProfileupdatePage {
	
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
  comment:any;
  
  mydata:any;
  result1:any;
  
  CustomerID:any;
  EMAIL:any;
  SecondaryEmail:any;
  PHONE:any;
  PHONE2:any;
  Password:any;
  rePassword:any;
  
   tokenvalues:Tokendata[];
  customerdata:any;

	  
	  tokendata	=	'';
	  mymsg2	=	'';
	  
	  
  
  
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,private file: File,private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController, public navParams: NavParams,private tokendataService: TokendataService) {
  
  
  		this.noc_request	=	0;
	
			this.tokendataService.gettokendata().then(tokenvalues => {
				this.tokenvalues = tokenvalues;
				
				this.customerdata	=		this.tokenvalues[0].accesstok;
				
				this.CustomerID			=	this.customerdata.CustomerID;
				this.EMAIL			=	this.customerdata.EMAIL;
				this.SecondaryEmail	=	this.customerdata.SecondaryEmail;
				this.PHONE		=	this.customerdata.PHONE;
				this.PHONE2		=	this.customerdata.PHONE2;
				this.Password	=	this.customerdata.Password;
				this.rePassword	=	this.customerdata.Password;
				
			});
					
			
			
			
			
		
  
  
  }
	
	ionViewDidLoad() 
	{
	
	
	
	
	}
  
  validate()
  {
  		var error	=	'0';
		
			
					
					 
		
		if(this.EMAIL=="")
		{
			alert("Please Enter Email");
			error	=	'1'
			return false;
		}
		
		if(this.PHONE=="")
		{
			alert("Please Enter Mobile");
			error	=	'1'
			return false;
		}
	
		if(this.Password=="")
		{
			alert("Please Enter Password");
			error	=	'1'
			return false;
		}
		else if(this.Password!=this.rePassword)
		{
			alert("Password Not Match");
			error	=	'1'
			return false;	
		}
	
		
		if(error=="0")
		{
			return true;
		}
		
		
  }
  
  submit_req(){




	this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
			
			this.customerdata	=		this.tokenvalues[0].accesstok;
			
			
		




 		var url1 	=	this.customerdata['base_url']+'ws/luwebservicemobile.asmx/ChangeCustomerProfile';
  
		
		var data1 =
		{
			'wskey':'59eeb7e2ecbb5e67b9600316d2987896',
			
			
			'LoginID':this.customerdata.LoginID,
			
			
			'customerEmail': this.EMAIL,
			'customerSecondaryEmail': this.SecondaryEmail,
			'txtProfileNewPassword': this.Password,
			'txtProfileConfirPassword':this.rePassword,
			'customerMobile': this.PHONE,
			'customerPhone': this.PHONE2,
			'fullName':'',
			'zipPostCode':'',
			'customerCity':'',
			'customerCountry':'',
			'customerState':'',
			'customerAddr1':'',
			'customerAddr2':'',
			'towerName':'',
			
			'ipAddress':'192.168.1.1',
		}
		
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
					
						
					var 		url5=this.customerdata['base_url']+'ws/luwebservicemobile.asmx/LoginbyUserID?wsKey=59eeb7e2ecbb5e67b9600316d2987896&username='+this.customerdata.LoginID+'&password='+this.Password+'&ipAddress=192.168.1.1';
				
				   this.http.get(url5)
				  .map(res => res.json())
				  .subscribe((data2)=>
				  
				  {
				  
						
						if(data2.ErrorNumber=="0")
						{
							this.tokendata				=	$.parseJSON(data2.ResponseResult);
							this.tokendata['base_url']	=	this.customerdata['base_url'];
							this.tokenvalues[0].accesstok=this.tokendata;
							
							
							
							
							
						}
						
						if(data.ResponseResult=="True")
						{
							this.mymsg2	=	"Profile Updated";
						}
						else
						{
							this.mymsg2	=	data.ResponseResult;
						}
						
						let alert = this.alertCtrl.create({title: 'Success',subTitle:this.mymsg2,buttons: [
						{
							text: 'OK',
							role: 'ok',
							handler: () => {
								this.navCtrl.push(ProfilePage);
							}
						 }
								 
						]});
						
						alert.present();
						loading.dismiss();
				
					},error=>{
					
					
					});
					
					
					
					
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
	});
	
	
	
	
	}
	
	
	
	
	
	

  
  
	
	
  
}

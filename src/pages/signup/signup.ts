import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController,AlertController  , ModalController,  ViewController } from 'ionic-angular';

import { Http ,Headers} from '@angular/http';
import { Renderer } from '@angular/core';


import {TermandconditionPage} from '../termandcondition/termandcondition';
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
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [TokendataService]
})
export class SignupPage {
	
  custName:any;
  email:any;
  contactNo:any;
  address:any;
  city:any;
  towerNamee:any; 
  Unit:any;

   
  countries:any;
  country:any;
  mobileCode:any;
  countryCode:any;
  title:any;
  gender:any;
  nationality:any;
  UnitType:any;
  customerType:any;
  customerTypeId:any;
  base_url	=	'';
  tosselect:any;
  


	
	
	constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,private file: File,private http: Http, private alertCtrl: AlertController, public modalCtrl: ModalController ) {
	
			this.base_url	=	'http://173.212.227.68/staging/';
			//this.base_url	=	'https://login.logicutilities.com/';
		
			
			this.tosselect	=	'false';
			
			
			
			this.clean();
			/*---------------------------------------------------Getting Country----------------------------------------------------------------------------*/
			
			let loading = this.loadingCtrl.create({content: 'Please wait...'});
			loading.present();
			var url		=	this.base_url+'ws/luwebservicemobile.asmx/GetCountryList?wskey=59eeb7e2ecbb5e67b9600316d2987896';
	
			
			this.http.get(url).map(res => res.json()).subscribe((data)=>
			{	console.log(data);
				
				if(data.ErrorNumber=="0")
				{
					this.countries	=	$.parseJSON(data.ResponseResult);console.log(this.countries);loading.dismiss();
				}
				else
				{
					let alert = this.alertCtrl.create({title: 'Error',subTitle:data.ErrorDescription,buttons: ['Dismiss']});alert.present();loading.dismiss();
				}
			
			},error=>{
				loading.dismiss();let alert = this.alertCtrl.create({title: 'Error',subTitle:"Country Not Found",buttons: ['Dismiss']});alert.present();
				
			});
			
			/*---------------------------------------------------END Getting Country------------------------------------------------------------------------*/
		
		
	
	
	}
	
	
	clean()
	{
			this.title			=	"0";//0
			this.country		=	"0";
			this.mobileCode		=	"0";
			this.countryCode	=	"971";
			this.gender			=	'0';
			this.nationality	=	'0';
			this.UnitType		=	'0';
			this.customerType	=	'0';
			this.customerTypeId	=	'1';
			
			this.custName		=	'';
			this.email			=	'';
			this.contactNo		=	'0';
			this.address		=	'';
			this.city			=	'';
			this.towerNamee		=	'';
			this.Unit			=	'';
			
	}
	fill()
	{
		this.title			=	"Mr.";//0
		this.country		=	"22";
		this.mobileCode		=	"22";
		this.countryCode	=	"971";
		this.gender			=	'1';
		this.nationality	=	'22';
		this.UnitType		=	'1';
		this.customerType	=	'1';
		this.customerTypeId	=	'1';
		
		this.custName		=	'a';
		this.email			=	'a@gmail.com';
		this.contactNo		=	'1234566789';
		this.address		=	'test street';
		this.city			=	'lahore	';
		this.towerNamee		=	'abc tower';
		this.Unit			=	'1';
		
		
	
	}
	
	validateEmail(mail)   
	{  
		
		 var x = mail;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
			alert("Not a valid e-mail address");
			return false;
		}
		else
		{
			return true;
		}
	} 
  validate()
  {
  		var error	=	'0';
		if(this.title=="0")
		{
			alert("Please Select Title");
			error	=	'1';
			return false;
		}
		if(this.custName=="")
		{
			alert("Please Enter Customer Name");
			error	=	'1'
			return false;
		}
		if(this.email=="")
		{
			alert("Please Enter Email");
			error	=	'1'
			return false;
		}
		else
		{
			if(this.validateEmail(this.email))
			{
				
			}
			else
			{
				error	=	'1'
			}
		}
		if(this.mobileCode=="0")
		{
			alert("Please Select Mobile Code ");
			error	=	'1'
			return false;
		}
		if(this.contactNo=="")
		{
			alert("Please Enter Contact Number ");
			error	=	'1'
			return false;
		}
		if(this.gender=="0")
		{
			alert("Please Select Gender ");
			error	=	'1'
			return false;
		}
		if(this.address=="")
		{
			alert("Please Enter address ");
			error	=	'1'
			return false;
		}
		if(this.country=="0")
		{
			alert("Please Select Country ");
			error	=	'1'
			return false;
		}
		if(this.nationality=="0")
		{
			alert("Please Select Nationality ");
			error	=	'1'
			return false;
		}
		
		if(this.city=="")
		{
			alert("Please Enter City ");
			error	=	'1'
			return false;
		}
		
		if(this.towerNamee=="")
		{
			alert("Please Enter Tower Name ");
			error	=	'1'
			return false;
		}
		
		if(this.Unit=="")
		{
			alert("Please Enter Unit ");
			error	=	'1'
			return false;
		}
		if(this.UnitType=="0")
		{
			alert("Please Select Unit Type");
			error	=	'1'
			return false;
		}
		
		if(this.customerType=="0")
		{
			alert("Please Select Customer Type");
			error	=	'1'
			return false;
		}
		if(this.customerTypeId=="0")
		{
			alert("Please Select Account Type");
			error	=	'1'
			return false;
		}
		if(this.tosselect=='false' || this.tosselect==false)
		{
			alert("Please Select Terms & Conditions");
			error	=	'1'
			return false;
		}
		
		if(error=="0")
		{
			return true;
		}
		
		
  }
  
  signup(){



 		var url1 	=	this.base_url+'ws/luwebservicemobile.asmx/NewRegistration';
  
		
		
		var data1 =
		{
			'wskey':'59eeb7e2ecbb5e67b9600316d2987896',
			'ipAddress':'192.168.1.1',
			'email':this.email,
			
			'custName':this.custName,
			'customerType':this.customerType,
			'country':this.country,
			'nationality':this.nationality,
			'title':this.title,
			'address':this.address,
			'city':this.city,
			'countryCode':this.countryCode,
			'mobileCode':this.mobileCode,
			
			'contactNo':this.contactNo,
			'gender':this.gender,
			'emiratesIdNumber':'',
			'passportNumber':'',
			'singleUnit':true,
			'multipleUnit':'',
			'customerTypeId':this.customerTypeId,
			'towerNamee':this.towerNamee,
			
			
			
			'unitNo':this.Unit,
			'UnitType':this.UnitType,
			"unitTypeId":"",
			
			"numberOfBed":"",
			"commercialType":"",
			"OwTitleDeadSpaName":"",
			
			
			
			"OwTitleDeadSpaNameBase64Data1":"",
			"OwPassportCopyName":"",
			"OwPassportCopyData1":'',
			
			"OwPowerOfAttorneyName":"",
			"OwPowerOfAttorneyData1":"",
			
			
		
			
			"OwPassportOfPowerofAttorneyName":"",
			"OwPassportOfPowerofAttorneyData1":"",
			
			
			"TyContractEjariCopyName":"",
			"TyContractEjariCopyData1":"",
			
		
			"TyPassportCopyName":"",
			"TyPassportCopyData1":"",
			"TyOPassportCopyName":"",
			"TyOPassportCopyNameData1":"",
			
		
			"TyOContractTitlDeedName":"",
			"TyOContractTitlDeedData1":"",
			
			
			"TradeLicenseName":"",
			"TradeLicenseData1":"",
			"EmiratesIdCopyName":"",
			"EmiratesIdData1":"",
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
					
					this.clean();
					let alert = this.alertCtrl.create({title: 'Success',subTitle:data.ResponseResult,buttons: ['Dismiss']});alert.present();loading.dismiss();
					
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
	term_and_condition_page()
	{
		this.navCtrl.push(TermandconditionPage)
	}
	

  
  
	
	
  
}

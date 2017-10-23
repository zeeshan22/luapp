import { Component } from '@angular/core';
import { App , Events,NavController, AlertController,LoadingController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';


import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

import * as $ from 'jquery';

/**
 * Generated class for the ForgetpwPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-forgetpw',
  templateUrl: 'forgetpw.html',
  
})
export class ForgetpwPage {

 public xmlItems : any;
 
 base_url	=	'';
 

   constructor(public appCtrl: App,public events:Events,public loadingCtrl: LoadingController,public navCtrl: NavController,private http: Http,private alertCtrl: AlertController) 
   {
		//this.base_url	=	'http://173.212.227.68/staging/';
		this.base_url	=	'https://login.logicutilities.com/';
   }
  



	  tokendata='';
		emails2:any;
		posts:any;
	///////////////
	signinpage()
	{
	
		this.navCtrl.setRoot(LoginPage);
			
	}
	
		
///////////////////////////////////////////////////Forget Password///////////////////////////////////////////////////////////////////////	
	
	
	
   	forgetpassword()
	{
	
		
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
	
		if(this.emails2==undefined || this.emails2=="")
		{
			alert("Please Enter Login ID");
			return false;
		}
		
		loading.present();
		var url	=	this.base_url+'ws/luwebservicemobile.asmx/ForgotPassword?wsKey=59eeb7e2ecbb5e67b9600316d2987896&loginid='+this.emails2+'&ipAddress=192.168.1.1';
	
		this.http.get(url)
		.map(res => res.json())
		.subscribe((data)=>
		{
			this.posts = data;
			
			if(this.posts.ErrorNumber=="0")
			{
				
			
				loading.dismiss();
				let alert = this.alertCtrl.create({
					title: this.posts.ResponseResult,
					subTitle:this.posts.ResponseSuccessMessage,
					buttons: ['Dismiss']
				});
				alert.present();
				this.emails2='';
			
			}
			else
			{
			
				loading.dismiss();
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:this.posts.ErrorDescription,
					buttons: ['Dismiss']
				});
				alert.present();
			
			}
			
		
			
		
		},error=>{
		
		console.log(error);
		
			loading.dismiss();
			let alert = this.alertCtrl.create({
				title: 'Error',
				subTitle:"The opertion couldn't be completed. Please contact administrator",
				buttons: ['Dismiss']
			});
			alert.present();
		
		});
	
	}
}

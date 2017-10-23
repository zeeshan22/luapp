import { Component } from '@angular/core';
import { App , Events,NavController, AlertController,LoadingController, MenuController } from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import {ForgetpwPage} from '../forgetpw/forgetpw';
import {SignupPage} from '../signup/signup';
import { Http ,Headers} from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';




import {ProfilehistoryPage} from '../profilehistory/profilehistory';
import {NetworkPage} from '../network/network';
import {ComposePage} from '../compose/compose';
import{ProfilePage} from '../profile/profile';
import{EnquiryPage} from '../enquiry/enquiry';


   

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';
import { File } from '@ionic-native/file';

import * as $ from 'jquery';



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
    providers: [TokendataService]

})
export class LoginPage {


	public xmlItems : any;
	store_user	=	'';
	store_pass	=	'';
	base_url	=	'';
	
   constructor(public appCtrl: App,public events:Events,public loadingCtrl: LoadingController,private file: File,public navCtrl: NavController,private http: Http,private alertCtrl: AlertController,private tokendataService: TokendataService , public menu:MenuController,public storage: Storage) {
	// this.navCtrl.push(ProfilePage);
 	
	this.menu.enable(false, 'myMenu');
	
	
	//this.base_url	=	'http://173.212.227.68/staging/';
	this.base_url	=	'https://login.logicutilities.com/';
	
	
	
  }



  forgetpassword():void{
	 
	 //alert("Coming Soon");
	 
	  this.navCtrl.push(ForgetpwPage);
  }
   
 

  tokenvalues:Tokendata[];


	getHeroes(): void {
	this.tokendataService.gettokendata().then(tokenvalues => {this.tokenvalues = tokenvalues;});
	
	
	}
  

 
	ionViewDidLoad() {
	
	
	this.storage.get('loginid2').then((loginid2) => {
	  this.store_user	=	loginid2;
	  
	});
	
	
	
	this.storage.get('Password').then((password) => {
	  this.store_pass	=	password;
	     
		 
		 
	   if( this.store_user!=null && this.store_user.length>0 && this.store_pass!=null && this.store_pass.length>0)
		{
		
			this.login2();
		}
	  	
	});
	
	this.getHeroes();
	
	
	}
	  tokendata='';
		posts;
		password='';
		emails='';
///////////////////////////////////////////////////Login///////////////////////////////////////////////////////////////////////	
	
	
   login2()
	{
	
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();
	
		var	user		=	this.store_user;
		var	password	=	this.store_pass;
	
	
	
		var url=	this.base_url + 'ws/luwebservicemobile.asmx/LoginbyUserID?wsKey=59eeb7e2ecbb5e67b9600316d2987896&username='+user+'&password='+password+'&ipAddress=192.168.1.1';
	
		
		
	
	   this.http.get(url)
	  .map(res => res.json())
	  .subscribe((data)=>
	  
	  {
	  
			this.posts = data;
			
			if(this.posts.ErrorNumber=="0")
			{
				this.tokendata	=	$.parseJSON(this.posts.ResponseResult);
				
				this.tokendata['base_url']	=	this.base_url;
				
				this.tokenvalues[0].accesstok=this.tokendata;
				
				//**************************for cordova***********************//
				//this.events.publish('username:changed', 'yes');
				
				//this.appCtrl.getRootNav().setRoot(ProfilehistoryPage);//
				
				
				this.storage.set('tos_redirect', '');
				this.appCtrl.getRootNav().setRoot(DashboardPage);
				
				
				loading.dismiss();
				
				//this.navCtrl.push(EnquiryPage);
				
				//this.navCtrl.setRoot(DashboardPage);
				
			
			
			}
			else
			{
				loading.dismiss();
			
			
			}
			
		
			
	
		},error=>{
		
			loading.dismiss();
	
		});
		
	}

	
   login()
   {
   	
		
		
			var	user		=	this.emails;
			var	password	=	this.password;
			
		
			
		
			if(user=="")
			{
				alert("Please Enter Username");return false;
				
				//user='DITEST1234';
				//user='RH1001T1';
			}
			else
			{
			
			}
			if(password=="")
			{
				alert("Please Enter Password");	return false;
				
				//password	=	'Dyno123$$';
				//password	=	'lydel112682';
			}
			else
			{
			
			}
			let loading = this.loadingCtrl.create({
				content: 'Please wait...'
			});
			loading.present();
			
			var url=	this.base_url + 'ws/luwebservicemobile.asmx/LoginbyUserID?wsKey=59eeb7e2ecbb5e67b9600316d2987896&username='+user+'&password='+password+'&ipAddress=192.168.1.1';
			
			
		
		   this.http.get(url)
		  .map(res => res.json())
		  .subscribe((data)=>
		  
		  {
		  
				this.posts = data;
				
				if(this.posts.ErrorNumber=="0")
				{
					this.tokendata				=	$.parseJSON(this.posts.ResponseResult);
					
					this.tokendata['base_url']	=	this.base_url;
					
					this.tokenvalues[0].accesstok=this.tokendata;
					
					//**************************for cordova***********************//
					//this.events.publish('username:changed', 'yes');
					
					this.storage.set('tos_redirect', '');
					
					this.appCtrl.getRootNav().setRoot(DashboardPage);
				
					
					loading.dismiss();
				
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
			
	
			
				/*loading.dismiss();
				let alert = this.alertCtrl.create({
					title: 'Error',
					subTitle:JSON.stringify(error),
					buttons: ['Dismiss']
				});
				alert.present();*/
				
				loading.dismiss();let alert = this.alertCtrl.create({title: 'Error',subTitle:"The operation could not be completed. Please contact administrator.",buttons: ['Dismiss']});alert.present();	
		
		
			});
		
		}


	
 
		Directore():void{
		
		
		
		this.file.createFile(this.file.externalDataDirectory, 'externalDatafile',false);
		
		this.file.writeExistingFile(this.file.externalDataDirectory, 'externalDatafile',this.tokendata);
		}
		
	
		
	
  
  signuppage():void{
	
	
	
	this.navCtrl.push(SignupPage);
	}
  
  }

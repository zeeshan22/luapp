import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';

import { MenuController } from 'ionic-angular';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { ClaimPage } from '../pages/claim/claim';
import {CallusPage } from '../pages/callus/callus';
import {ProfilePage } from '../pages/profile/profile';
import {SettingPage } from '../pages/setting/setting';
import {AboutusPage } from '../pages/aboutus/aboutus';



import { Storage } from '@ionic/storage';



   



import {TermandconditionPage} from '../pages/termandcondition/termandcondition';
import {ScheduleofchargesPage} from '../pages/scheduleofcharges/scheduleofcharges';
	

import {TermofusePage } from '../pages/termofuse/termofuse';


import {NetworkPage } from '../pages/network/network';


import{PagessPage} from '../pages/pagess/pagess';
import{EnquiryPage} from '../pages/enquiry/enquiry';

import{AboutappPage} from '../pages/aboutapp/aboutapp';

import {Tokendata} from './tokendata';
import { TokendataService} from './tokendata.service';
import { File } from '@ionic-native/file';
import { CallNumber } from '@ionic-native/call-number';



@Component({
  templateUrl: 'app.html',
    providers: [TokendataService]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;
userName: string;
tokenval:string;
logoutval=false;
  tokenvalues:Tokendata[];
  customerdata:any;
  pepperoni2:any;

  constructor(private callNumber: CallNumber,public events: Events,public file:File,private tokendataService: TokendataService,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu:MenuController,public storage: Storage) {
  

	storage.ready().then(() => {

		//zeeshan
		
		storage.get('keeplogin').then((keeplogin) => {
		 
		 this.pepperoni2	=	keeplogin;
			
		});
		/**/
	});	

		
	
	  
  	
	
	//  this.userName = "not logged in";

   events.subscribe('username:changed', username => {
      if(username !== undefined && username !== ""){
        this.userName = username;
		this.logoutval=true;
this.pages = [
	  { title: 'HOME', component: DashboardPage },
	  { title: 'Claim', component: ClaimPage },
       { title: 'Profile', component: ProfilePage },
       { title: 'Setting', component: SettingPage },
	   {title:'About us',component:AboutusPage},
      
       { title: 'Network', component:  NetworkPage}
	  ];
      }
   });
  events.subscribe('logout:occurred', username => {
      if(username !== undefined && username !== ""){
		this.logout();
      }
   });
 
   
    this.initializeApp();

    // used for an example of ngFor and navigation
	//  this.getHeroes();
	
  }
  
callme():void{
	  this.callNumber.callNumber("00966112717222", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }
    logout():void{
	    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
	  
      { title: 'Signup', component: SignupPage },
      { title: 'Network', component: NetworkPage },

    
       { title: 'Setting', component: SettingPage },

  //     { title: 'Network', component:  NetworkPage}
    ];
	   this.logoutval=false;
	   	  this.tokendataService.gettokendata().then(tokenvalues => {this.tokenvalues = tokenvalues;
		  			  this.tokenvalues[0].accesstok='';
					  this.nav.setRoot(LoginPage);
});

			  //********************* for cordova****************//
			//	this.file.removeFile(this.file.externalDataDirectory, 'externalDatafile');
	}
    
  
  ionViewDidLoad() {
	  this.getHeroes();
 	
	/*setTimeout(function (){
		this.storage.get('keeplogin').then((keeplogin) => {
		  this.pepperoni2	=	keeplogin;
		  window.alert(keeplogin);
		});

	},500);*/
  	
  }
  
 

  getHeroes(): void {
	  this.tokendataService.gettokendata().then(tokenvalues => {this.tokenvalues = tokenvalues;
	  this.loadtoken();
	  });
	  	
		
	   }

	   loadtoken():void{
		   this.file.readAsText(this.file.externalDataDirectory, 'externalDatafile')
		.then(_ => (this.tokenvalues[0].accesstok=_,
						 
		  	this.logoutval=true,
		this.pages = [
	   { title: 'HOME', component: DashboardPage },
	   { title: 'Claim', component: ClaimPage },
       { title: 'Profile', component: ProfilePage },
       { title: 'Setting', component: SettingPage },
      
       { title: 'Network', component:  NetworkPage}
			],
			this.rootPage = DashboardPage
	
			)
		)
		.catch(err =>	{	

				this.pages = [
					{ title: 'Home', component: HomePage },
					{ title: 'Login', component: LoginPage },
					{ title: 'Signup', component: SignupPage },
					
					{ title: 'Network', component:  NetworkPage},
					{ title: 'Setting', component: SettingPage },
					   {title:'About us',component:AboutusPage}
					],
				this.rootPage = LoginPage
		
		}
		);
	   }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
	  this.getHeroes();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

	openPage(page) 
	{
		this.nav.setRoot(page.component);
		this.menu.close();
	}
	
	side_home() 
	{
	
		this.nav.setRoot(DashboardPage);
		this.menu.close();
	}
	side_aboutus() 
	{
		
		this.nav.push(AboutusPage);
		this.menu.close();
		
	}
	side_services() 
	{
	//	this.nav.push(AboutusPage);
		this.menu.close();
	}
	side_faq() 
	{
		this.nav.push(PagessPage);
		this.menu.close();
	}
	side_enquiry() 
	{
		this.nav.push(EnquiryPage);
		this.menu.close();
	}
	
	side_helpcenter()
	{
	
	}
	side_aboutthisapp() 
	{
		this.nav.push(AboutappPage);
		this.menu.close();
	}
	
	side_setting()
	{
		this.nav.push(SettingPage);
		this.menu.close();
	}
	
	side_tou() 
	{
		this.nav.push(TermofusePage);
		this.menu.close();
	}
	side_logout()
	{
		this.storage.set('LoginId', '');
		this.storage.set('Password', '');
		this.storage.set('keeplogin', 'false');
		this.nav.push(LoginPage);
		this.menu.close();
	}
	
	
	go_to_about_this_app()
	{
		this.nav.push(AboutappPage);
			this.menu.close();
	}
	go_to_term_of_use_mob()
	{
		this.nav.push(TermofusePage);
			this.menu.close();
	}
	go_to_tac()
	{
		this.nav.push(TermandconditionPage);
			this.menu.close();
	}
	go_to_sos()
	{
		this.nav.push(ScheduleofchargesPage);
			this.menu.close();
	}
	
	change_login_setting()
	{
		var abc		=	this.tokendataService;
		var abc2	=	this.storage;
		if(this.pepperoni2==true)
		{
	
			abc.gettokendata().then(tokenvalues => {
			/**/	this.tokenvalues = tokenvalues;
				
				this.customerdata	=		this.tokenvalues[0].accesstok;
				
				
				abc2.set('Password', this.customerdata['Password']);
				abc2.set('loginid2',this.customerdata['LoginID']);
				
				abc2.set('keeplogin', 'true');
	
			});
			
		}
		else
		{
		
			abc.gettokendata().then(tokenvalues => {
				this.tokenvalues = tokenvalues;
				
				this.customerdata	=		this.tokenvalues[0].accesstok;
				
				abc2.set('Password', '');
				
				abc2.set('loginid2', '');
				
				
				abc2.set('keeplogin', 'false');/**/
	
			});
		
		}
		
		
		
	}
	menuOpened()
	{
	
		this.storage.get('keeplogin').then((keeplogin) => {
		 
		 this.pepperoni2	=	keeplogin;
			
		});
	
	}
	
}

import { Component } from '@angular/core';

//import { NavController,Events } from 'ionic-angular';
import { NavController } from 'ionic-angular';//
import { Platform,LoadingController } from 'ionic-angular'
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import {DashboardPage} from '../dashboard/dashboard';
//import { SplashScreen } from '@ionic-native/splash-screen';


//import {ViewbillPage } from '../viewbill/viewbill'; 


/**/
import {InboxPage } from '../inbox/inbox';
import {ProfilePage } from '../profile/profile';
import {SettingPage } from '../setting/setting';

import {LocateusPage } from '../locateus/locateus';
import {SecuritydepositPage } from '../securitydeposit/securitydeposit';
import {FinalbillPage } from '../finalbill/finalbill';
import {PaymenthistoryPage } from '../paymenthistory/paymenthistory';

import {ComposePage } from '../compose/compose';
import {ProfilehistoryPage} from '../profilehistory/profilehistory';


 //import {Tokendata} from '../../app/tokendata';

// import { TokendataService} from '../../app/tokendata.service';

import { File } from '@ionic-native/file';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
tokenexist;

//, public platform: Platform, public splashScreen: SplashScreen,public loadingCtrl: LoadingController
  constructor(public navCtrl: NavController) {
 // this.tokenexist=false;

// this.navCtrl.setRoot(SignupPage);
//this.navCtrl.setRoot(LoginPage);


  }

  loginpage(){

	  this.navCtrl.push(LoginPage);
  }
   signuppage():void{
    
	alert("Coming Soon");
	
	 // this.navCtrl.push(SignupPage);
  }
 
/* logout():void{
	  					   this.events.publish('logout:occurred', 'yes');
						   this.tokenexist=false;

  }
 /* chktoken():void{
	  
	  if(this.tokenvalues[0].accesstok==''){
		  		//  alert(JSON.stringify(this.tokenvalues));
		this.tokenexist=false;
	  }
	  else{
				//  alert('no token');
  		//this.tokenexist=true;
  
	  }
	  
  }
  tokenvalues:Tokendata[];
  /*getHeroes(): void {
	  this.tokendataService.gettokendata().then(tokenvalues => {this.tokenvalues = tokenvalues;});
	  	
		this.file.readAsText(this.file.externalDataDirectory, 'externalDatafile')
		.then(_ => (this.tokenvalues[0].accesstok=_,
	 this.chktoken()
	 )
		).catch(err =>		
	 this.chktoken()
		);
	  
	 

  }
  
 */
  ionViewDidLoad() {
/*this.platform.ready().then(() => {
	
	this.splashScreen.hide();
});*/
  }
  tokendata='';

  
}

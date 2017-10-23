import { Component } from '@angular/core';
import {  NavController,AlertController,Content,App,MenuController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
	
import {LoginPage} from '../login/login';
import { ClaimPage } from '../claim/claim';
import {CallusPage } from '../callus/callus';
import {ProfilePage } from '../profile/profile';
import {SettingPage } from '../setting/setting';
import {TermandconditionPage} from '../termandcondition/termandcondition'

import { Storage } from '@ionic/storage';





import {ContactusPage } from '../contactus/contactus';
import {SecuritydepositPage } from '../securitydeposit/securitydeposit';
import {FinalbillPage } from '../finalbill/finalbill';
import {FinalbillreqPage } from '../finalbillreq/finalbillreq';
import {PaymenthistoryPage } from '../paymenthistory/paymenthistory';


import {NetworkPage } from '../network/network'; 
import {EnquiryPage } from '../enquiry/enquiry';
import {InboxPage} from '../inbox/inbox';



import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

import {Tokendata} from '../../app/tokendata';
import { TokendataService} from '../../app/tokendata.service';



//import {HelpPage } from '../help/help';
import * as $ from 'jquery';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

	
	tokenvalues:Tokendata[];
	customerdata:any;
	
	public items = [];
	private tabBarHeight;
	private topOrBottom:string;
	private contentBox;
	
	  
	constructor(public navCtrl: NavController,private alertCtrl: AlertController,private tokendataService: TokendataService,public theInAppBrowser:InAppBrowser,private http: Http,public appCtrl: App , public menu:MenuController , public storage: Storage) {
		
		this.tokendataService.gettokendata().then(tokenvalues => {
			this.tokenvalues = tokenvalues;
		
			this.customerdata	=		this.tokenvalues[0].accesstok;
			console.log(this.customerdata);
			this.menu.enable(true, 'myMenu');
			
			
			
			if(this.customerdata['IsTermsConditionsAccepted']=="false" || this.customerdata['IsTermsConditionsAccepted']==false)
			{
			
				this.storage.get('tos_redirect').then((tos_redirect) => {
					if(tos_redirect=="")
					{
						this.storage.set('tos_redirect', 'yes');
						this.navCtrl.push(TermandconditionPage);
					}
				});
				
				
			}
			
		});
		

}

  
userName:string;
 
 
ionViewDidLoad()
{


}

viewbill():void{
				       this.navCtrl.push(NetworkPage);

}
 
inbox1():void{
				       this.navCtrl.push(InboxPage);

}
enquiry1():void{
				       this.navCtrl.push(EnquiryPage);

}

profile():void{
				       this.navCtrl.push(ProfilePage);

}
calluspage():void{
				       this.navCtrl.push(CallusPage);

}
settingpage():void{
				
 	this.menu.enable(false, 'menu1');
 
}
contactus():void{
				       this.navCtrl.push(ContactusPage);

}
securitydeposit():void{
				       this.navCtrl.push(SecuritydepositPage);

}
finalbill():void{
				       this.navCtrl.push(FinalbillPage);

}
paymenthistory():void{
				       this.navCtrl.push(PaymenthistoryPage);

}
claimpage():void{
	this.navCtrl.push(ClaimPage);
}
networkpage():void{
				       this.navCtrl.push(NetworkPage);

}



public openWithInAppBrowser2(url : string)
{
	let target = "_blank";
	$(".abc").load(url);
	//this.theInAppBrowser.create(url, '_blank', 'location=no,toolbar=no,clearsessioncache=yes,clearcache=yes');
	
	this.http.get(url)
	.map(res => res.text())
	.subscribe((data)=>
	{
		alert(data);
		//loading.dismiss();
		
	
	},error=>{});
}
opensidebar()
{
	

}		
		
home()
{
	//this.navCtrl.push(DashboardPage);
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

coming():void{
	let alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: 'this page is coming soon',
    buttons: ['Dismiss']
  });
  alert.present();
}

  
}

import { BrowserModule } from '@angular/platform-browser';

import { InAppBrowser } from '@ionic-native/in-app-browser';



import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';




import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {DashboardPage} from '../pages/dashboard/dashboard';
import {AboutappPage} from '../pages/aboutapp/aboutapp';
import {TermofusePage} from '../pages/termofuse/termofuse';
import {AboutusPage } from '../pages/aboutus/aboutus';

import {TermandconditionPage} from '../pages/termandcondition/termandcondition';
import {ScheduleofchargesPage} from '../pages/scheduleofcharges/scheduleofcharges';

import {Profileutility} from '../pages/profileutility/profileutility';
import {Profiledoc} from '../pages/profiledoc/profiledoc';

import {InboxPage } from '../pages/inbox/inbox';

import {BilldetailsPage} from '../pages/billdetails/billdetails';

import {CallusPage } from '../pages/callus/callus';
import {ProfilePage } from '../pages/profile/profile';
import {SettingPage } from '../pages/setting/setting';

import {PreviousbillPage } from '../pages/previousbill/previousbill';



import {LocateusPage } from '../pages/locateus/locateus';
import {SecuritydepositPage } from '../pages/securitydeposit/securitydeposit';
import {SecuritydepositreqPage } from '../pages/securitydepositreq/securitydepositreq';
import {FinalbillPage } from '../pages/finalbill/finalbill';
import {FinalbillreqPage } from '../pages/finalbillreq/finalbillreq';
import {PaymenthistoryPage } from '../pages/paymenthistory/paymenthistory';
import {ComposePage } from '../pages/compose/compose';



import {ProfileupdatePage} from '../pages/profileupdate/profileupdate';



import {ProfilehistoryPage} from '../pages/profilehistory/profilehistory';
import {ProfileunitPage} from '../pages/profileunit/profileunit';



import {PagessPage} from '../pages/pagess/pagess';
import {PaymentPage} from '../pages/payment/payment';

import {ContactusPage} from '../pages/contactus/contactus';

import {BillpaymentPage} from '../pages/billpayment/billpayment';
import {CashtransferPage} from '../pages/cashtransfer/cashtransfer';




import {HelpPage } from '../pages/help/help';
import {NetworkPage } from '../pages/network/network';
import {NetworklistPage } from '../pages/networklist/networklist';
import {address } from '../pages/networklist/address';

import {EnquiryPage } from '../pages/enquiry/enquiry';



import { CallNumber } from '@ionic-native/call-number';
import { TokendataService} from './tokendata.service';


//--------------Claim------------//

import {ClaimPage} from '../pages/claim/claim';
import {ClaimdetailsPage} from '../pages/claimdetails/claimdetails';
import {ClaimrecordPage } from '../pages/claimrecord/claimrecord';
import {TrackclaimPage} from '../pages/trackclaim/trackclaim';

import {SubmitdocPage } from '../pages/submitdoc/submitdoc';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgetpwPage } from '../pages/forgetpw/forgetpw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
	
	ClaimPage,
	ClaimdetailsPage,
	ClaimrecordPage,
	SubmitdocPage,
	TrackclaimPage,
	
	
	HomePage,
    LoginPage,
	SignupPage,
	
	
	NetworkPage,
	NetworklistPage,
	address,
	
	ForgetpwPage,
	EnquiryPage,
	DashboardPage,
	
	AboutusPage,
	AboutappPage,
	TermofusePage,
	
	TermandconditionPage,
	ScheduleofchargesPage,

	
	Profileutility,
	Profiledoc,

	InboxPage,
	BilldetailsPage,
	CallusPage,
	ProfilePage,
	SettingPage,
	PreviousbillPage,
	LocateusPage,
	SecuritydepositPage,
	SecuritydepositreqPage,
	FinalbillPage,
	FinalbillreqPage,
	PaymenthistoryPage,
	ComposePage,
	
	ProfileupdatePage,

	
	ProfilehistoryPage,
	ProfileunitPage,
	ProfileunitPage,
	PagessPage,
	PaymentPage,
	ContactusPage,
	BillpaymentPage,
	CashtransferPage,
		

	HelpPage
	
  ],
  imports: [
    BrowserModule,
	 HttpModule,
	
	
	BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
	

  ],
  bootstrap: [IonicApp],
  entryComponents: [
 	
    MyApp,
	HomePage,
	
	ClaimdetailsPage,
	ClaimPage,
	ClaimrecordPage,
	TrackclaimPage,
	SubmitdocPage,
	
	
	LoginPage,
	SignupPage,
	ForgetpwPage,
	NetworkPage,
	NetworklistPage,
	address,
	DashboardPage,
	AboutusPage,
	AboutappPage,
	TermofusePage,
	
	
	TermandconditionPage,
	ScheduleofchargesPage,
	

	Profileutility,
	Profiledoc,

	InboxPage,
	BilldetailsPage,
	CallusPage,
	ProfilePage,
	SettingPage,
	PreviousbillPage,
	
	LocateusPage,
	SecuritydepositPage,
	SecuritydepositreqPage,
	FinalbillPage,
	FinalbillreqPage,
	PaymenthistoryPage,
	ComposePage,
	
	ProfileupdatePage,
	
	
	ProfilehistoryPage,
	ProfileunitPage,
	
	PagessPage,
	PaymentPage,
	ContactusPage,

	BillpaymentPage,
	CashtransferPage,

	HelpPage,
	EnquiryPage
	
   
  ],
  providers: [
    HTTP,
	
	CallNumber,
	TokendataService,
  	File,
    StatusBar,
    SplashScreen,
	  InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

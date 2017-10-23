import { Component } from '@angular/core';
import {  NavController, AlertController,LoadingController} from 'ionic-angular';
 import { Claimform} from '../../app/claimform';
 import { ClaimformService} from '../../app/claimform.service';
 import {Tokendata} from '../../app/tokendata';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

 import { TokendataService} from '../../app/tokendata.service';


/**
 * Generated class for the ClaimdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-claimdetails',
  templateUrl: 'claimdetails.html',
  providers: [ClaimformService,TokendataService]
})
export class ClaimdetailsPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService,private claimformService: ClaimformService) {
  }
  
  tokenvalues:Tokendata[];
  tokenvalue:Tokendata={accesstok:''};
  getToken(): void {
    this.tokendataService.gettokendata().then(tokenvalues => this.tokenvalues = tokenvalues);

  }
  
 
  
claimvalues:Claimform[];

submitform():void{
	  
	let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
	this.tokendata=this.tokenvalues[0].accesstok;
	//	alert(this.tokendata);

	//alert(JSON.stringify(this.claimvalues));
	//alert(this.csrfTok+this.name);
			  var url='http://alqutabheavytransport.com/myapp/myapp/public/api/claims';	

	 // var url='http://localhost/myapp/public/api/claims';	
	 
		  //alert(url);
	
	var data2=this.claimvalues[0];
let myHeaders = new Headers;
    this.createAuthorizationHeader(myHeaders);

    this.http.post(url,data2, {
      headers: myHeaders
    }).map(res => res.json()).subscribe(data => {
      // alert('usercreated successfully');
	  loading.dismiss();
let alert = this.alertCtrl.create({
    title: 'Success!',
    subTitle: 'Claim submitted successfully',
    buttons: ['Ok']
  });
  alert.present();	   		
  this.navCtrl.pop();
					  

    },
                err => {
					loading.dismiss();
					let alert = this.alertCtrl.create({
    title: 'try later!',
    subTitle: 'Error form submission ',
    buttons: ['Ok']
  });
  alert.present();	
			//		alert('error');
				//	alert(err._body);
				});
		

	
}
tokendata='';
createAuthorizationHeader(headers: Headers) {
	//this.tokendata=this.tokenvalues[0].accesstok;
	  headers.append('Accept','application/json');
headers.append('Authorization','Bearer '+this.tokendata);

  }
getHeroes(): void {
    this.claimformService.getclaimform().then(claimvalues => this.claimvalues = claimvalues);
}
  ionViewDidLoad() {
this.getHeroes(); 
	  this.getToken();
 }

}

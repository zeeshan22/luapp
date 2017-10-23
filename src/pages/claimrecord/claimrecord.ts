
import { Component } from '@angular/core';
import { IonicPage, LoadingController,AlertController,NavController, NavParams } from 'ionic-angular';
 import {Tokendata} from '../../app/tokendata';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

 import { TokendataService} from '../../app/tokendata.service';



/**
 * Generated class for the ClaimrecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-claimrecord',
  templateUrl: 'claimrecord.html',
})
export class ClaimrecordPage {


  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private http: Http,private tokendataService: TokendataService) {
	  
  }

  
  selected=false;
  selectedclaim:any;
  selectclaim(claim):void{
	  
	  this.selectedclaim=claim;
	  this.selected=true;
  }
  
  
  
  
  
 tokenvalues:Tokendata[];
  
  getHeroes(): void {
	 this.tokendataService.gettokendata().then(tokenvalues => {this.tokenvalues = tokenvalues;
	 this.tokendata=this.tokenvalues[0].accesstok;
	 this.selectclaims();});
	 
	/* this.file.readAsText(this.file.externalDataDirectory, 'externalDatafile')
		.then(_ => (this.tokenvalues[0].accesstok=_
	// this.chktoken()
	 )		);
	  */
	 

  }
  
 
  ionViewDidLoad() {
	  this.getHeroes();
  }
  claimdata:any;
  tokendata;
  selectclaims():void{
	  //alert('madina');
	  let loading = this.loadingCtrl.create({
    content: 'Please wait...'  });

  loading.present();
	  
					
			var url='http://alqutabheavytransport.com/myapp/myapp/public/api/claims';
		
	//	var url='http://localhost/myapp/public/api/claims';
				//alert(url);
				
			let headers = new Headers();
				this.createAuthorizationHeader(headers);
				
											

				this.http.get(url, {
				  headers: headers
				})
				.map(res => res.json()).subscribe(data => {
					this.claimdata = data;
					  loading.dismiss();	

					if(this.claimdata.length<1){

let alert = this.alertCtrl.create({
    title: 'Sorry!',
    subTitle:'No record found',
    buttons: ['ok']
					});
					
  alert.present();
  this.navCtrl.pop();
					}
					//this.userName='abc';
					//   this.events.publish('username:changed', this.userName);

				//alert(JSON.stringify(data));
				},
				err=>{
loading.dismiss();
let alert = this.alertCtrl.create({
    title: 'Sorry!',
    subTitle:'No record found',
    buttons: ['ok']
					});
					
  alert.present();
  this.navCtrl.pop();				});
				
				//alert(this.email+this.password);  
	  
  }
  
	
  createAuthorizationHeader(headers: Headers) {
		headers.append('Accept','application/json');
		headers.append('Authorization','Bearer '+this.tokendata);

  }
}

import { Component } from '@angular/core';
import {  NavController, NavParams ,AlertController} from 'ionic-angular';
import { ClaimdetailsPage } from '../claimdetails/claimdetails';
import { SubmitdocPage } from '../submitdoc/submitdoc';
import { ClaimrecordPage } from '../claimrecord/claimrecord';
import { TrackclaimPage } from '../trackclaim/trackclaim';
 import { Claimform} from '../../app/claimform';

 import { ClaimformService} from '../../app/claimform.service';

/**
 * Generated class for the ClaimPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
   providers: [ClaimformService]
  
})
export class ClaimPage {

  constructor(public navCtrl: NavController,private claimformService: ClaimformService, public navParams: NavParams,private alertCtrl: AlertController) {
  }
  claimformdata=false;
  claimvalues:Claimform[];

   getHeroes(): void {
    this.claimformService.getclaimform().then(claimvalues => this.claimvalues = claimvalues);

  }
  /* this.claimformService.getclaimform().then(claimvalues => (this.claimvalues = claimvalues,
	alert(JSON.stringify(this.claimvalues))
	));*/
 
  ionViewDidLoad() {
	  this.getHeroes();
  }
 
 
 claimrecord():void{
	 this.navCtrl.push(ClaimrecordPage);
 }
  
  claimtrack():void{
	 this.navCtrl.push(TrackclaimPage);
 }
  
  reportclaim=false;

  
cliamdetailspage():void{
		      this.navCtrl.push(ClaimdetailsPage);

}
  
  docpg():void{
	  this.navCtrl.push(SubmitdocPage);
  }
  
  
coming():void{
	let alert = this.alertCtrl.create({
    title: 'Error',
	subTitle:"The opertion couldn't be completed. Please contact administrator",
    buttons: ['Dismiss']
  });
  alert.present();
}
}

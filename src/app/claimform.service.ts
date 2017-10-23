import { Injectable } from '@angular/core';
import {Claimform} from './claimform';
const CLAIMVALUES: Claimform[] = [
  { najm_ref_no: '',id_iqama:'',claiment_type:'',payee_name:'',iban:'',bank_name:'',mobile_no:''}
];
@Injectable()
export class ClaimformService {
	
	getclaimform(): Promise<Claimform[]> {
  return Promise.resolve(CLAIMVALUES);
}
	
}
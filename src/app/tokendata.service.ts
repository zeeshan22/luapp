import { Injectable } from '@angular/core';
import {Tokendata} from './tokendata';
const TOKENVALUES: Tokendata[] = [
  { accesstok: ''}
];
@Injectable()
export class TokendataService {
	
	gettokendata(): Promise<Tokendata[]> {
  return Promise.resolve(TOKENVALUES);
}
	
}
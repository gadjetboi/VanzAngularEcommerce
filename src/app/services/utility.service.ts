import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  generateOrderNo() {
    let now = Date.now().toString() // '1492341545873'
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)
    // format
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }

  getCurrentDate(): string {
    return new Date().toString();
  }

}

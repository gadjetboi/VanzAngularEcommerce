import { Injectable } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToastyMessageService {

  constructor(private toastyService: ToastyService) { 
   
  }

  showMessage(title: string, msg: string, type: string) {
    let toastOptions: ToastOptions = {
        title: title,
        msg: msg,
        showClose: true, //TODO: Move to config
        timeout: 3000, //TODO: Move to config
        theme: "bootstrap"
    };

    switch (type) {
        case 'default': this.toastyService.default(toastOptions); break;
        case 'info': this.toastyService.info(toastOptions); break;
        case 'success': this.toastyService.success(toastOptions); break;
        case 'wait': this.toastyService.wait(toastOptions); break;
        case 'error': this.toastyService.error(toastOptions); break;
        case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}


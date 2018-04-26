import { Injectable, EventEmitter } from '@angular/core';
import { SettingModel } from '../models/setting.model';
import { IAppState } from '../interfaces/app-state';
import { NgRedux } from '@angular-redux/store';
import { CHANGE_SETTING } from '../redux/actions/action';

@Injectable()
export class SettingService {

  setting = new SettingModel();

  constructor(private store: NgRedux<IAppState>) { }

  changeThemeBackgroundColor(color: string) : void {
    this.setting.themeBackgroundColor = color;
    this.store.dispatch({type: CHANGE_SETTING, payload: { setting: this.setting } });
  }

  getTax() : number {
    return this.setting.tax;
  }

  getShippingFee() : number {
    return this.setting.shippingFee;
  }

}

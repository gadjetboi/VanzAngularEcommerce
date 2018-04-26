import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/setting.service';
import { SettingModel } from './models/setting.model';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './interfaces/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 
  themeBackgroundColor: string;
  title = 'app';

  constructor(private store: NgRedux<IAppState>) {
  }

  ngOnInit(): void {
    this.store.select().subscribe((res : IAppState) => {
      if(typeof(res.setting) !== 'undefined' && typeof(res.setting.themeBackgroundColor) !== 'undefined')
        this.themeBackgroundColor = res.setting.themeBackgroundColor;
    });
  }
}



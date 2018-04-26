import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'setting-component',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  settingFormGroup = new FormGroup({
    themeBackgroundColor: new FormControl('', [Validators.required])
  });
  
  constructor(public settingService : SettingService) {
    
   }

  ngOnInit() {
  }

  saveSettings() : void {
    if(!this.settingFormGroup.valid) {
      alert('form is not valid');
      return;
    }

    if(this.settingFormGroup.valid) {
      this.settingService.changeThemeBackgroundColor(this.settingFormGroup.value.themeBackgroundColor);
    }
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { DynamicMapModule } from '@lcu-ide/dynamic-map-common';

export const settings = FathymSharedModule.DefaultServiceSettings(environment);

// settings.APIRoot = 'http://www.lowcodeunit.com';
// settings.APIRoot = 'http://www.habistack.com';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, DynamicMapModule],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: settings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
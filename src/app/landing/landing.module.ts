import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { MainComponent } from './components/main/main.component';
import { WhatIsInstapayComponent } from './components/what-is-instapay/what-is-instapay.component';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    WhatIsInstapayComponent,
    HowToUseComponent,
    GetStartedComponent,
    FaqComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intapay-website';
  constructor(private translate: TranslateService){
    const lang = localStorage.getItem('lang') || 'ar'; // استرجاع اللغة من التخزين المحلي
    this.translate.setDefaultLang('ar'); // اللغة الافتراضية
    this.translate.use('ar'); // اللغة الحالية
    document.documentElement.dir=lang==='ar'?'rtl':'ltr'; // تعيين اتجاه النص
  }
}

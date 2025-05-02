import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  selectedLang = 'en';
  resourcePath ='navbar.'
  constructor( private translate: TranslateService,) { }

  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(this.selectedLang);
    document.documentElement.dir = this.selectedLang === 'ar' ? 'rtl' : 'ltr';

  }
  changeLanguage(lang: string) {
    console.log('Selected lang:', lang);
    this.selectedLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

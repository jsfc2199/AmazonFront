import { Component, inject } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shared-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrl: './search-nav-bar.component.css',
})
export class SearchNavBarComponent {
  //public variables
  public country: string = '';
  public selectedLanguage: string = 'Español';
  public isDarkMode: boolean = false;

  //TODO: obtener de servicio de carrito del usuario
  public counter: number = 0;

  //private variables
  private languageMap: Record<string, string> = {
    Español: 'es',
    English: 'en',
  };

  //Private Services
  private geolocationService = inject(GeolocationService);
  private translate = inject(TranslateService);

  //Private Subscriptions
  private geolocationSubscription = new Subscription();

  constructor() {
    const storageLang = localStorage.getItem('lang') || 'es';
    const globalLanguage = localStorage.getItem('globalLanguage') || 'Español';
    this.selectedLanguage = globalLanguage;
    this.translate.setDefaultLang(storageLang);
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    document.body.setAttribute('data-bs-theme', savedTheme);

    this.geolocationSubscription = this.geolocationService
      .getUserCountry()
      .subscribe(({ country }) => {
        this.country = country;
      });
  }

  changeLanguage(language: string) {
    const langCode = this.languageMap[language] || 'es';
    this.translate.use(langCode);
    localStorage.setItem('lang', langCode);
    localStorage.setItem('globalLanguage', language);
    this.selectedLanguage = language;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  ngOnDestroy(): void {
    this.geolocationSubscription.unsubscribe();
  }
}

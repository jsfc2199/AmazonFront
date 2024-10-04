import { Component, inject } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrl: './search-nav-bar.component.css',
})
export class SearchNavBarComponent {
  public country: string = '';
  public selectedLanguage: string = 'Español';
  public isDarkMode: boolean = false;

  //TODO: obtener de servicio de carrito del usuario
  public counter: number = 0;

  private geolocationService = inject(GeolocationService);
  private geolocationSubscription = new Subscription();

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

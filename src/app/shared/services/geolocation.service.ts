import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ipapi } from '../interfaces/ip-api.interface';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  private http: HttpClient = inject(HttpClient)

  private url = 'http://ip-api.com/json'

  getUserCountry(){
    return this.http.get<Ipapi>(this.url);
  }
}

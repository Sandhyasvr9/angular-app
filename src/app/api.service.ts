import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getWeather(location:any){
    return this.http.get('http://api.weatherstack.com/current?access_key=c647a71aac0ebc4bad7c7da8a85a4b02&query='+ location)
  }
}

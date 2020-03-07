import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCoords(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(res => {
        resolve(
          {
            lat: res.coords.latitude,
            long: res.coords.longitude
          }
        )
      },
        err => {
          reject(err);
        });
    });
  }

}

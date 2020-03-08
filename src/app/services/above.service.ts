import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {AboveRequest, AboveResponse, DUMMY_DATA} from 'src/app/models';





@Injectable({
  providedIn: 'root'
})
export class AboveService {

  constructor(private http: HttpClient) {

  }


  getSatellites(lat: number, long: number) {
    let params: AboveRequest = {
      observer_lat: lat,
      observer_lng: long,
      observer_alt: 0,
      search_radius: 10,
      category_id: 0
    };

    let requestUrl: string = `${environment.satApiUrl}/above/${params.observer_lat}/${params.observer_lng}/${params.observer_alt}/${params.search_radius}/${params.category_id}&apiKey=${environment.satApiToken}`;
    
    return this.http.get<any>(requestUrl);

  }

}

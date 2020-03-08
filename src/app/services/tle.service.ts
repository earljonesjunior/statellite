import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TleService {

  constructor(private http: HttpClient) { }


  getTle(satid: number){

    let requestUrl: string = `${environment.satApiUrl}/tle/${satid}&apiKey=${environment.satApiToken}`;

    return this.http.get<any>(requestUrl);

  }

}

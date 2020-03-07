import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  constructor(private locationService: LocationService) {

    this.locationService.getCoords()
    .then(coords =>{
      console.log(`lat: ${coords.lat}, long: ${coords.long}`);
    })
    .catch(err =>{
      console.log(err)
    })

  }

}

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AboveService } from 'src/app/services/above.service';
import { AboveResponse, DUMMY_DATA} from 'src/app/models';
import { first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})



export class AppComponent implements OnInit{


  coords: {
    lat: number,
    long: number
  };

  data: AboveResponse[] = [];
  displayedColumns=["satname", "satlat", "satlng", ];
  isLoading = false;

  constructor(private locationService: LocationService, private aboveService: AboveService) {

    this.locationService.getCoords()
      .then(coords => {
        console.log(`lat: ${coords.lat}, long: ${coords.long}`);
        this.coords = {
          lat: +Number(coords.lat).toFixed(5),
          long: +Number(coords.long).toFixed(5)
        }
        this.getSatellites()
      })
      .catch(err => {
        console.log(err)
      })



  }

  ngOnInit(){
   // this.data = DUMMY_DATA.above;
  }

  getSatellites(){
    this.data=[];
    this.isLoading = true;
    this.aboveService.getSatellites()
    .pipe(first())
    .subscribe((res: {info: any, above: AboveResponse[]})  => {
      this.data = res.above;
      console.log(this.data);
      this.isLoading = false;
    })
  }

  



}

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { AboveService } from 'src/app/services/above.service';
import { AboveResponse, DUMMY_DATA } from 'src/app/models';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TleComponent } from '../tle/tle.component';


@Component({
  selector: 'app-above',
  templateUrl: './above.component.html',
  styleUrls: ['./above.component.scss']
})
export class AboveComponent implements OnInit {

  coords: {
    lat: number,
    long: number
  };

  data: AboveResponse[];
  displayedColumns = ["satname", "satlat", "satlng",];
  isLoading = false;

  constructor(
    private locationService: LocationService,
    private aboveService: AboveService,
    private dialog: MatDialog
  ) {

    this.locationService.getCoords()
      .then(coords => {
        console.log(`lat: ${coords.lat}, long: ${coords.long}`);
        this.coords = {
          lat: +Number(coords.lat).toFixed(5),
          long: +Number(coords.long).toFixed(5)
        }
      })
      .catch(err => {
        console.log(err)
      })



  }

  ngOnInit() {
    // this.data = DUMMY_DATA.above;
  }

  getSatellites() {
    this.data = [];
    this.isLoading = true;
    this.aboveService.getSatellites(this.coords.lat, this.coords.long)
      .pipe(first())
      .subscribe((res: { info: any, above: AboveResponse[] }) => {
        this.data = res.above;
        console.log(this.data);
        this.isLoading = false;
      })
  }

  openDialog(satData: AboveResponse) {
    const dialogRef = this.dialog.open(TleComponent,
      {
        data: satData
      }
    );

  }



}

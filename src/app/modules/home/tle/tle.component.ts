import { Component, OnInit, Inject } from '@angular/core';
import { AboveResponse, TLE} from 'src/app/models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {TleService} from 'src/app/services/tle.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-tle',
  templateUrl: './tle.component.html',
  styleUrls: ['./tle.component.scss']
})
export class TleComponent implements OnInit {


  tle: TLE;
  isLoading = false;

  constructor(
    public tleService: TleService,
    public dialogRef: MatDialogRef<TleComponent>,
    @Inject(MAT_DIALOG_DATA) public satData: AboveResponse
  ) { 
    this.getTleData();
  }


  getTleData(){
    this.isLoading=true;
    this.tleService.getTle(this.satData.satid)
    .pipe(first())
    .subscribe((res: {info: any, tle: string}) =>{
      this.tle = new TLE(res.tle);
      this.isLoading=false;
    }
    )
  }

  ngOnInit(): void {
    console.log(this.satData)
  }

}

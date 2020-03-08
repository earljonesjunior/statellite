import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboveComponent } from './above/above.component';
import { TleComponent } from './tle/tle.component';
import {MatModule} from 'src/app/shared/mat.module';


@NgModule({
  declarations: [AboveComponent, TleComponent],
  imports: [
    CommonModule,
    MatModule,
    HomeRoutingModule
  ],
  entryComponents: [TleComponent]
})
export class HomeModule { }

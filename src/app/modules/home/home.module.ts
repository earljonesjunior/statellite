import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboveComponent } from './above/above.component';
import { TleComponent } from './tle/tle.component';


@NgModule({
  declarations: [AboveComponent, TleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

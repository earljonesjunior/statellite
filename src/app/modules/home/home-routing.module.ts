import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboveComponent } from './above/above.component';


const routes: Routes = [
  {
    path: '',
    component: AboveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

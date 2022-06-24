import { NgModule } from '@angular/core';
import { HomeRouting, } from './home.routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRouting,
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPipe } from './pipes/icon.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { WeatherCardComponent } from './weather-card/weather-card.component';



@NgModule({
  declarations: [
    IconPipe,
    TempPipe,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    IconPipe,
    TempPipe,
    WeatherCardComponent 
  ]
})
export class SharedModule { }

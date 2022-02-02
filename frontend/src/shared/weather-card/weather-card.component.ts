import { Component, Input, OnInit } from '@angular/core';
import { DailyForecastData } from 'src/app/models/forecast-data';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  constructor() {}

  @Input() childForecastData: DailyForecastData;

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { DailyForecastData, ForecastData } from '../models/forecast-data';
import { ForecastDataService } from '../services/forecast-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  forecastData: DailyForecastData[];
  jsonData: DailyForecastData[];
  constructor(private forecastService: ForecastDataService) {}

  ngOnInit(): void {
    this.forecastService
      .getForecastData()
      .subscribe((apiResponse: ForecastData) => {
        this.forecastData = apiResponse.daily;
      });
    this.forecastService.getJsonForecastData().subscribe((jsonResponse) => {
      this.jsonData = jsonResponse.daily;
      console.log(this.jsonData);
    });
  }
}

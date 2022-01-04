import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weatherService.commponent';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public textSerch: string = '';
  public weatherData: any;
  public text = false;
  constructor(private _weatherService: WeatherService) {}
  public currentSkin: boolean = false;

  ngOnInit(): void {}
  textChange() {
    if (this.text) {
      this.text = false;
    }
    this.text = false;
    let city = this.textSerch;

    this._weatherService.getWeatherForCity(city).subscribe(
      (data) => {
        var weatherData = data;
        this.weatherData = weatherData;
        console.log('Weather Data', this.weatherData);
      },
      (err) => {
        console.log(err);
        this.text = true;
      }
    );
    this.textSerch = '';
  }
}

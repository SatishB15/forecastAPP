// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:
    'https://api.openweathermap.org/data/2.5/onecall?lat=20.5937&lon=78.9629&exclude=current,minutely,hourly&appid=',
  API_KEY: '2d859f3d30535a229e336025bf6a2e88',
  ICON_URL: 'https://openweathermap.org/img/wn/',
  JSON_URL: 'http://localhost:3000/forecast',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

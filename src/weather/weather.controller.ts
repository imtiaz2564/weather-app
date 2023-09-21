// import { Controller,Get } from '@nestjs/common';

// @Controller('weather')
// export class WeatherController {
//   @Get()
//   getWeather() {
//     const temperature = Math.floor(Math.random() * 30) + 10; // Random temperature between 10 and 40 degrees Celsius
//     const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
//     const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

//     return {
//       temperature,
//       condition: randomCondition,
//     };
//   }

// }

import { Controller, Get } from '@nestjs/common';

@Controller('weather')
export class WeatherController {
  @Get()
  getWeather() {
    const numberOfEntries = 5; // You can specify the number of weather entries you want
    const weatherData = [];

    for (let i = 0; i < numberOfEntries; i++) {
      const temperature = Math.floor(Math.random() * 30) + 10; // Random temperature between 10 and 40 degrees Celsius
      const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

      weatherData.push({
        temperature,
        condition: randomCondition,
      });
    }

    return weatherData;
  }
}
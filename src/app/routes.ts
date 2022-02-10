import { Routes } from "@angular/router"
import { CalculatorComponent } from "./calculator/calculator.component"
import { HomeComponent } from "./home/home.component"
import { WeatherComponent } from "./weather/weather.component"

export const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"weather",component:WeatherComponent}
]

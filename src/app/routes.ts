import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { WeatherComponent } from "./weather/weather.component"

export const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"weather",component:WeatherComponent}
]
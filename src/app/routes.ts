import { Routes } from "@angular/router"
import { CalculatorComponent } from "./calculator/calculator.component"
import { HomeComponent } from "./home/home.component"
import { TodoAppComponent } from "./todo-app/todo-app.component"
import { TodoListComponent } from "./todo-list/todo-list.component"
import { TodoUpdateComponent } from "./todo-update/todo-update.component"
import { WeatherComponent } from "./weather/weather.component"

export const appRoutes:Routes = [
  {path:"",component:HomeComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"weather",component:WeatherComponent},
  {path:"todo-app",component:TodoAppComponent},
  {path:"todolist",component:TodoListComponent},
  {path:'update-todo/:id',component:TodoUpdateComponent}
]

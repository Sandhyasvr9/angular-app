import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {MatIconModule} from "@angular/material/icon"

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    CalculatorComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

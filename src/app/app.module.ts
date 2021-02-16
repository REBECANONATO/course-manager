import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { Error404Component } from '../app/error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, {
        path: '**', component: Error404Component
      }
    ]),
    CourseModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

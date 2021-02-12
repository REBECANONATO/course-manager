import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './shared/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Compoennt } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Compoennt,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Compoennt
      }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html"
})



export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageUrl: '',
        price: 99.99,
        code: 'xpss - 4528',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December, 2, 2020'
      },
      {
        id: 2,
        name: 'Reactjs',
        imageUrl: '',
        price: 99.99,
        code: 'xppp - 4568',
        duration: 80,
        rating: 4.9,
        releaseDate: 'December, 2, 2020'
      }
    ];
  }

}

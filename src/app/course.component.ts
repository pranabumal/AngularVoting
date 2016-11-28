import { Component } from '@angular/core';
import {CourseService} from  './course.service';
@Component({
    selector: 'courses',
    template: `
    <h2 auto >Courses</h2>
    {{check }}
    <input type="text" ng g cl />
    <ul>
        <li *ngFor="let course of courses; let myIndex = index">
         {{myIndex}}  {{course}}
        </li>
    </ul>
    `,
    providers:[CourseService]
})
export class CourseComponent{
    check = "You have done it";
    courses;
    constructor(courseService:CourseService){
       this.courses= courseService.getCourses();
    }
}
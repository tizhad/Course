import {Injectable} from '@angular/core';
import {mergeMap, toArray} from 'rxjs/operators';
import {Course} from '../models/course';
import {CoursesService} from './courses.service';
import {forkJoin, Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    courses: Course[] = [];
    searchTerm: string = '';
    totalPages: number = 11;

    constructor(private coursesService: CoursesService) {
    }

    getAllProducts(): Observable<Course[]> {
        const apiCalls = [];
        for (let page = 1; page <= this.totalPages; page++) {
            apiCalls.push(this.coursesService.getProducts(this.courses.length + 1).pipe(
                mergeMap(courseData => courseData),
                toArray()
            ));
        }

        return forkJoin(apiCalls).pipe(
            mergeMap((results: Course[][]) => {
                const mergedCourses = [].concat(...results);
                this.courses = [...this.courses, ...mergedCourses];
                return of(this.courses);
            })
        );
    }
}

import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course, SortOptions, UserData} from "../models/course";
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    @Input() courses: Course[];
    courseList: Course[] = [];
    isLoggedInUser: boolean = false;
    userDataInStorage: UserData;
    currentPage: number = 1;
    totalPages;
    sortOptions: SortOptions[] =[SortOptions.DESCRIPTION, SortOptions.PRICE, SortOptions.NAME];



    constructor(private courseService: CoursesService, private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.checkLoggedInUser();
        this.getProducts(this.currentPage);
        this.getUserCourseList();
    }


    getProducts(page: number) {
        this.courseService.getProducts(page).subscribe((courseData: any) => {
            this.totalPages = courseData.count;
            courseData.forEach(c => {
                const newCourse: Course = {...c};
                this.courseList.push(newCourse);
                this.disableEnrolledCourses();
            })
        });
    }

    disableEnrolledCourses() {
        const data = this.storageService.getUserDataFromLocalStorage();
        if (data && data.courseList) {
            for (let userCourse of data.courseList) {
                const courseToUpdate = this.courseList.find(c => c.id === userCourse.id);
                if (courseToUpdate) {
                    courseToUpdate.enrollDate = userCourse.enrollDate;
                }
            }
        }
    }

    setSelectedCourse(course) {
        this.storageService.updateUserDate(course)
    }

    checkLoggedInUser() {
        const data = this.storageService.getUserDataFromLocalStorage();
        if (Object.keys(data).length > 0) {
            this.isLoggedInUser = true;
        }
    }

    getUserCourseList() {
        this.userDataInStorage = this.storageService.getUserDataFromLocalStorage();
    }

    onPageChange(): void {
        this.currentPage++;
        this.getProducts(this.currentPage);
    }
    sort(option: string) {
        this.courseService.sortProducts(option).subscribe(c =>{
            this.courseList = c;
        })

    }
}

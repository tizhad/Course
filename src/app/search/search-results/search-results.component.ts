import {Component, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import {SearchService} from "../../services/search.service";
import {ActivatedRoute} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    filteredCourses: Course[];
    courses: Course[];
    searchQuery: string;

    constructor(private searchService: SearchService, private route: ActivatedRoute, private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.searchQuery = params['q'] || '';
            this.getProducts();
        });
    }

    getProducts() {
        this.searchService.getAllProducts().subscribe((courses: Course[]) => {
            this.courses = courses;
            this.filterBaseOnSearch();
        });
    }

    filterBaseOnSearch() {
        this.filteredCourses = this.courses.filter((course: Course) => {
            return course.name?.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
    }

    setSelectedCourse(course) {
        this.storageService.updateUserDate(course)
    }

    // ngOnDestroy() {
    //     this.routeChangeSubscription.unsubscribe();
    // }
}

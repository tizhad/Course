import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Course} from "../models/course";

interface ApiResponse {
    result: {
        data: Course[]
    };
    count: number
}

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    baseUrl: string = environment.API_URL;
    apiVersion: string = environment.version;
    courseList: Course[] = [];

    constructor(private http: HttpClient) {
    }

    getProducts(page: number): Observable<Course[]> {
        return this.http.get<ApiResponse>(`${this.baseUrl}?Page=${page}&${this.apiVersion}`)
            .pipe(map(response => response.result.data));
    };
    sortProducts(sortOption: string) {
        let page = 1;
        return this.http.get<ApiResponse>(`${this.baseUrl}?Sorts=${sortOption}&Page=${page}&${this.apiVersion}`)
            .pipe(map(response => response.result.data));
    }
}

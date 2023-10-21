import {TestBed} from '@angular/core/testing';

import {CoursesService} from './courses.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Course} from "../models/course";

describe('CoursesService', () => {
    let service: CoursesService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });


        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(CoursesService);
        service.baseUrl = '';
    });
    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('fetches data from api', () => {
        const data: Course[] = [
            new Course(), new Course()
        ];
        const page: number = 1;
        service.baseUrl= `https://dev.burnwood.aihr.com/catalog/api/Product?Page=${page}&api-version=1.0`

        service.getProducts(page).subscribe(courses => {
            console.log(courses)
            expect(courses).toEqual(data);
        });

        const req = httpTestingController.expectOne(service.baseUrl);
        expect(req.request.method).toEqual('GET');

        req.flush(data);
    });
});

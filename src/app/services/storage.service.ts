import {Injectable} from '@angular/core';
import {Course, UserData} from "../models/course";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private document: Document;
    userData: UserData;

    constructor() {
        this.document = document;
    }

    storeUserDataInLocalStorage(data: UserData) {
        this.userData = data;
        const userDataString = JSON.stringify(data);
        this.document.defaultView?.localStorage.setItem('userData', userDataString);
    }

    getUserDataFromLocalStorage() {
        const userDataString = this.document.defaultView?.localStorage.getItem(
            'userData'
        );
        return JSON.parse(userDataString || '{}');
    }

    updateUserDate(course: Course) {
        this.userData = this.getUserDataFromLocalStorage();
        this.userData.courseList.push(course);
        this.storeUserDataInLocalStorage(this.userData)
    }
}

import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../services/storage.service";
import {Course, UserData} from "../models/course";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    selectedDate: string;
    errorMessage: string;

    constructor(public dialogRef: MatDialogRef<ModalComponent>, private storageService: StorageService) {
    }

    onDateChange(date: string) {
        this.errorMessage = '';
        this.selectedDate = date;
        const userData = this.storageService.getUserDataFromLocalStorage();
        this.checkUserAvailability(userData, date);

    }

    confirm(): void {
        this.dialogRef.close(this.selectedDate);
    }

    close(): void {
        this.dialogRef.close();
    }

    checkUserAvailability(userData: UserData, selectedDate: string) {
        const date: number = new Date(selectedDate).getMonth() + 1;
        if (userData.courseList) {
            userData.courseList.map((c: Course) => {
                if (new Date(c.enrollDate).getMonth() + 1 === date) {
                    this.errorMessage = 'You have a course in this month. Please select another date.'
                }
            })
        }
    }
}

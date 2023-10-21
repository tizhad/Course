import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course, Price} from "../models/course";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {CurrencyPipe} from "@angular/common";

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent {
    @Input() course: Course;
    @Output() selectedCourseEmit: EventEmitter<Course> = new EventEmitter();

    noImageProvided: string = 'assets/no-image.jpg';
    enrolledCourse: Course;
    USDNumericCode: number = 840;

    constructor(public dialog: MatDialog, private currencyPipe: CurrencyPipe) {

    }

    onEnrollClick(course: Course): void {
        let dialogRef: MatDialogRef<ModalComponent> = this.dialog.open(ModalComponent, {
            width: '250px',
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                course.enrollDate = result;
                this.selectedCourseEmit.emit(this.enrolledCourse);
            }
        });
        this.enrolledCourse = course;
    }

    formatCurrency(): string {
        let priceInUSD: Price;
        priceInUSD = this.course.pricing.find(p => {
            return p.currency === this.USDNumericCode;
        })
        return this.currencyPipe.transform(priceInUSD.value, 'USD', 'symbol');
    }

    truncateDescription(description: string, maxLength: number): string {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.substring(0, maxLength) + '...';
        }
    }

}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../services/storage.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    isLoggedInUser: boolean = false;

    constructor(private router: Router, private storageService: StorageService) {
    }

    moveToSignup() {
        this.router.navigate(['/signup'])
    }


    ngOnInit(): void {
        this.checkUserStatus();
    }

    checkUserStatus() {
        const status = this.storageService.getUserDataFromLocalStorage();
        status.name ? this.isLoggedInUser = true : false
    }
}

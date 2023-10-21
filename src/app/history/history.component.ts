import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {UserData} from "../models/course";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  enrollmentHistory: UserData;
  noImageProvided: string = 'assets/no-image.jpg';


  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.enrollmentHistory = this.storageService.getUserDataFromLocalStorage();
  }

}

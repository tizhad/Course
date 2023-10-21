import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormComponent} from './form/form.component';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MaterialModule} from "./material/material.module";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {CourseComponent} from './course/course.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ModalComponent} from './modal/modal.component';
import {CourseListComponent} from './course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import {CurrencyPipe} from "@angular/common";
import { SearchResultsComponent } from './search/search-results/search-results.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FormComponent,
        SearchComponent,
        CourseComponent,
        ModalComponent,
        CourseListComponent,
        HomeComponent,
        HistoryComponent,
        SearchResultsComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MaterialModule,
        RouterOutlet,
        RouterLink,
        RouterModule.forRoot([]),
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [CurrencyPipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}

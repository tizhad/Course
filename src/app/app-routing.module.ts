import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {CourseListComponent} from "./course-list/course-list.component";
import {HomeComponent} from "./home/home.component";
import {HistoryComponent} from "./history/history.component";
import {SearchResultsComponent} from "./search/search-results/search-results.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'signup',
        component: FormComponent,
    },
    {
        path: 'course-list',
        component: CourseListComponent,
    },
    {
        path: 'history',
        component: HistoryComponent,
    },
    {
        path: 'search-results',
        component: SearchResultsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

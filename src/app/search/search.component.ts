import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchForm: FormGroup;
    searchTerm: string = '';

    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        this.initSearchForm();
    }

    initSearchForm(): void {
        this.searchForm = this.formBuilder.group({
            searchTerm: ['']
        });
    }

    search(): void {
        this.searchTerm = this.searchForm.get('searchTerm').value;
        this.router.navigate(['/search-results'], { queryParams: { q: this.searchTerm } });
    }
}

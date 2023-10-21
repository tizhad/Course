import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    form: FormGroup;
    formData: any;

    constructor(private fb: FormBuilder, private storageService: StorageService, private router: Router) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    ngOnInit() {
        this.formData = this.storageService.getUserDataFromLocalStorage();
    }

    get name() {
        return this.form.get('name');
    }

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }


    onSubmit() {
        if (this.form.valid) {
            this.storageService.storeUserDataInLocalStorage(this.form.value);
            this.router.navigate(['/course-list'])
        }
    }
}

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormComponent} from './form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

fdescribe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormComponent],
            imports: [FormsModule, ReactiveFormsModule
            ],
        });
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have a form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });
    it('should have a form valid when all required fields are filled', () => {
        const nameControl = component.form.get('name');
        const emailControl = component.form.get('email');
        const passwordControl = component.form.get('password');

        nameControl.setValue('John Doe');
        emailControl.setValue('johndoe@example.com');
        passwordControl.setValue('password123');

        expect(component.form.valid).toBeTruthy();
    });
    it('should display "Name is required" error message when name is empty and form is submitted', () => {
        const emailControl = component.form.get('name');
        emailControl.setValue('');
        component.onSubmit();

        fixture.detectChanges();
        const errorMessage = fixture.debugElement.query(By.css('.text-danger'));
        expect(errorMessage.nativeElement.textContent).toContain('Name is required');
    });
});

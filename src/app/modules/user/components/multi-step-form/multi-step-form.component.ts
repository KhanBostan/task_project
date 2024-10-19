import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss']
})
export class MultiStepFormComponent {

  multiStepForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.multiStepForm = this.fb.group({
      stepOne: this.fb.group({
        name: ['', Validators.required],
      }),
      stepTwo: this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      }),
      stepThree: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    });
  }

  get stepOne(): FormGroup {
    return this.multiStepForm.get('stepOne') as FormGroup;
  }

  get stepTwo(): FormGroup {
    return this.multiStepForm.get('stepTwo') as FormGroup;
  }

  get stepThree(): FormGroup {
    return this.multiStepForm.get('stepThree') as FormGroup;
  }

  onSubmit() {
    if (this.multiStepForm.valid) {
      console.log(this.multiStepForm.value);
      // Handle submission logic here
    } else {
      this.multiStepForm.markAllAsTouched();
    }
  }

}

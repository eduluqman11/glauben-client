import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ApiService from '../api.service';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css'],
})
export class CreateaccountComponent {
  registerForm: any | undefined;

  //number
  status: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {}

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmit() {
    if (this.registerForm.value) {
      this.api.register(this.registerForm.value).subscribe((response: any) => {
        this.status = response['status'];
        setTimeout(() => {
          if (this.status === 201) {
            this.route.navigate(['/~admin~']);
          }
        }, 5000);
      });
    }
  }
}

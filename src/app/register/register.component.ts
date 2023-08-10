import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ApiService from '../api.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm: any | undefined;

  //boolean
  messageFlag: boolean = false;
  wrongCredential: boolean = false;
  
  //number
  status: number | undefined;
  errorStatus: number | undefined;

  //string
  message: string | undefined;
  error: string | undefined;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private jwtService:JwtService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onLoginSubmit() {
    try {
      this.api.login(this.loginForm.value).subscribe( 
        (response: any) => {
          if (response) {
            console.log(response)
            this.message = response['message'];
            if (response['status'] === 200) {
              this.messageFlag = true;
              console.log(response['token'])
              this.jwtService.setToken(response['token'])
              setTimeout(() => {
                this.router.navigate([`/~admin-dashboard~`],{ queryParams: { user: response['body'] } }                );
              }, 5000);
              this.ngOnInit();
            }
          }
        },
        (error: HttpErrorResponse) => {
          this.wrongCredential = true;
          this.error = error['error']['message'];
          this.errorStatus = error['status'];
        }
      );
    } catch (error) {
      console.log('error');
    }
  }

  onClose() {
    this.messageFlag = false;
    this.wrongCredential = false;
  }

  keypress(e: any) {
    if (e.key) {
      this.wrongCredential = false;
    }
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ApiService from '../api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  user: string | undefined | null;
  error:string | undefined
  companyName:string | undefined;
  dash:string | undefined

  constructor(
    private router: ActivatedRoute,
    private api: ApiService,
    private route:Router
  ) {}

  ngOnInit() {
    //get params data which send form register ts file
    this.router.queryParams.subscribe((params) => {
      this.user = params['user'];
    });

    if (this.user) {
      this.api.getSingleUser(this.user).subscribe(
        (respnse: any) => {
        this.companyName = respnse['data']['username']
      },
      (error:HttpErrorResponse)=>{
        this.error = error['error']['message'];
      }
      );
    }
  }

  signOut(){
    localStorage.removeItem('Access_token')
    this.route.navigate(['/~admin~']);
  }
  Dashboard(dashboard:string){
      this.dash=dashboard
      console.log(this.dash)
  }

 
}

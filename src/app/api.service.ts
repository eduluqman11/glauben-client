import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  constructor(private http:HttpClient) { }

  
  
  getCategory() {
    return this.http.get(`${environment.baseUrl}/category/getCategory`);
  }

  register(data:any){
    return this.http.post(`${environment.baseUrl}/auth/~register~`,data)
  }
  
  login(data:any){
    return this.http.post(`${environment.baseUrl}/auth/~login~`,data)
  }

  getAllCollection(){
    return this.http.get(`${environment.baseUrl}/collection/getCollections`)
  }




  getSingleUser(email:string){
   const  token = localStorage.getItem('Access_token')
   const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
   })

    return this.http.get(`${environment.baseUrl}/user/~getOneUser~/${email}`,{ headers })
  }

}

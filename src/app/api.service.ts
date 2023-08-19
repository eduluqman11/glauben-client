import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  constructor(private http:HttpClient) { }
    token = localStorage.getItem('Access_token')
  
  
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
  
    const headers = new HttpHeaders({
       'Authorization' : `Bearer ${this.token}`
    })
    return this.http.get(`${environment.baseUrl}/collection/getCollections`,{headers})
  }

  deleteImage(id:number,imageName:string){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
   })
    return this.http.delete(`${environment.baseUrl}/collection/remove?imageName=${imageName}&id=${id}`,{headers})
  }

  getSingleUser(email:string){
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
   })
   return this.http.get(`${environment.baseUrl}/user/~getOneUser~/${email}`,{ headers })
  }



}

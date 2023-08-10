import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
    Token_key='Access_token'



  setToken(token:any){
      localStorage.setItem(this.Token_key, token)
  }

  removeToken(){
    localStorage.removeItem(this.Token_key)
  }

  getDecodeToken(){
   const getLocalItem = localStorage.getItem('Access_token')
    if(getLocalItem) {
      return jwt_decode(getLocalItem)
    }
    return null
  }
}

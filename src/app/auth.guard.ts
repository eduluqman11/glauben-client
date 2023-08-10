import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const getLocalItem = localStorage.getItem('Access_token')
    console.log(getLocalItem)
    if(getLocalItem !== null){
      return true;
    }else{
    window.location.href='/~admin~'
    return false;
    } 
};

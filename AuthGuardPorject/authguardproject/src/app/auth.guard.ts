import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router = inject(Router);
  let isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");

  if(isUserLoggedIn=="false")
  {
    alert("please login in again");
    _router.navigateByUrl("");
    return false;
  }
  return true;
};

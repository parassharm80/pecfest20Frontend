import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {ValidationService} from './validation.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationGuard implements CanActivate {


  constructor(private validationService:ValidationService,private router:Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    let stateUrl=state.url;
    return this.validationService.verifySessionId().pipe(map((response) => {
      this.validationService.isLoggedIn=response.logged_in;
      this.validationService.isAdmin=response.admin;
      this.validationService.stateChecked=true;
      if(this.validationService.isLoggedIn){
        if(stateUrl=="/register"||stateUrl=="/login") {
          this.router.navigate(['..']);
          return !this.validationService.isLoggedIn;
        }
        else
          return this.validationService.isLoggedIn;
      }
      else{
        if(stateUrl=="/profile") {
          this.router.navigate(['../login']);
          return this.validationService.isLoggedIn;
        }
        else
          return !this.validationService.isLoggedIn;
      }
    }));
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import {Observable, of} from 'rxjs';
import {ValidationService} from './validation.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationGuard implements CanActivate {


  constructor(private validationService:ValidationService,private router:Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.validationService.verifySessionId(state.url).pipe(tap(response => {
          if(!response){
            if(state.url=="/login")
              this.router.navigate(['../events']);
            else if(state.url=="/profile")
              this.router.navigate(['../login']);
            else if(state.url=="/register")
              this.router.navigate(['../profile']);
            else
              this.router.navigate(['..']);
          }
        }));
  }

}

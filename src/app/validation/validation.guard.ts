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
    return true;
        return this.validationService.verifySessionId().pipe(tap(response => {
          this.validationService.isLoggedIn = !!response;
          if(!response)
            this.router.navigate(['../events'])
          this.validationService.stateChecked=true;
        }));
  }

}

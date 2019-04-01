import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
// import { Observable } from 'rxjs';

@Injectable()
export class Authguard implements CanActivate {

    constructor( private authService:AuthService, private   router: Router){ }

    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
        if (!this.authService.isAuthenticated()){
          this.router.navigate(['/']);
          return false;
        }
    
        return true;
    
      }


}


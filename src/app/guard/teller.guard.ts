import { SignupComponent } from './../view/signup/signup.component';
import { TelllerSignupComponent } from './../view/telller-signup/telller-signup.component';
import { TelllerHomepageComponent } from './../view/telller-homepage/telller-homepage.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate ,CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class TellerGuard implements CanDeactivate<SignupComponent>  {
  
  canDeactivate(component: SignupComponent, currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.tellerForm.dirty){
      return confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }
}

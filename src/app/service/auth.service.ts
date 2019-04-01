import { Tellers } from './../dto/tellers';
import { MAIN_URL } from './teller.service';
import { Login } from './../dto/login';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {Router} from "@angular/router";
const URL = "teller/login";
@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(signin: Tellers): Observable<boolean> {
    return this.http.post<boolean>(MAIN_URL + URL, signin)
      .pipe(
        map((result)=>{
          sessionStorage.setItem("token", result + "");
          if (result){
            this.router.navigate(['/login']);
          }
          return result;
        })
      )
  }

  isAuthenticated(): boolean{
    if (sessionStorage.getItem("token")){
      return sessionStorage.getItem("token") == 'false' ? false: true;
    }
  }

  logout(): void{
    sessionStorage.removeItem("token");
    this.router.navigate(['/']);
  }
}



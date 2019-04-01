import { Tellers } from './../dto/tellers';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable,throwError} from 'rxjs/index' ;
export const MAIN_URL= "http://localhost:8080/";
const URL = "teller";

@Injectable(
)
export class TellerService {

  constructor(private http: HttpClient) { }

  saveTeller(teller: Tellers): Observable<boolean> {
        return this.http.post<boolean>(MAIN_URL +URL , teller);
         
      }
      searchTeller(tellerName: String): Observable<Array<Tellers>> {
        return this.http.get<Array<Tellers>>(MAIN_URL + URL + "/" + tellerName);
      }

      deleteTeller(userName: string): Observable<boolean>{
        return this.http.delete<boolean>(MAIN_URL+ URL + "/" + userName);
      }
      // handleError(error) {
      //   let errorMessage = '';
      //   if (error.error instanceof ErrorEvent) {
      //     // client-side error
      //     errorMessage = `Error: ${error.error.message}`;
      //   } else {
      //     // server-side error
      //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      //   }
      //   window.alert(errorMessage);
      //   return throwError(errorMessage);
      // }
      // error(error){
      //   let errors= false;
      //   if(error.error instanceof ErrorEvent){
      //     errors=true;
      //   }else{
      //     errors=false;

      //   }window
      //   .alert(errors);
      //   return throwError(errors);

      // }
     
}

import { MAIN_URL } from './teller.service';
import { Queue } from './../dto/queue';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = "queue";
@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Queue>>{
    return this.http.get<Array<Queue>>(MAIN_URL + URL);
  }
  // deactiveRecord(cusomers.ticketno)
  deactiveRecord(ticketno: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + ticketno);
  }
}

import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { IPresidentialVoteResult } from '../interfaces/presidential-vote-result';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //TODO: Optimise code by implementing import of only observable not entire rxjs

@Injectable({
  providedIn: 'root'
})
export class PresidentialVoteService {


  private apiUrl = environment.serverUrl;
    constructor(private http: HttpClient) {
    }

    getVotes(): Observable<IPresidentialVoteResult[]> {
        return this.http.get<IPresidentialVoteResult[]>(`${this.apiUrl}/presidentialvote/results`);
    }

    getSortedVotes(): Observable<IPresidentialVoteResult[]> {
        return this.http.get<IPresidentialVoteResult[]>(`${this.apiUrl}/presidentialvote/sorted-results`);
    }
}

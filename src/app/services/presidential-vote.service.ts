import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { IPresidentialVoteResult } from '../interfaces/presidential-vote-result';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //TODO: Optimise code by implementing import of only observable not entire rxjs

@Injectable({
  providedIn: 'root'
})
export class PresidentialVoteService {


  private apiUrl: string = environment.serverUrl;
    constructor(private httpClient: HttpClient) {
    }

    public getVotes(): Observable<IPresidentialVoteResult[]> {
        return this.httpClient.get<IPresidentialVoteResult[]>(`${this.apiUrl}/presidentialvote/results`);
    }

    public getSortedVotes(): Observable<IPresidentialVoteResult[]> {
        return this.httpClient.get<IPresidentialVoteResult[]>(`${this.apiUrl}/presidentialvote/sorted-results`);
    }
}

import { Component, OnInit } from '@angular/core';
import { PresidentialVoteService } from '../../services/presidential-vote.service';

@Component({
  selector: 'app-parliamentary-vote-table',
  templateUrl: './parliamentary-vote-table.component.html',
  styleUrls: ['./parliamentary-vote-table.component.css']
})
export class ParliamentaryVoteTableComponent implements OnInit {

  public presidentialVoteResults;
    dateToday = Date.now();
    constructor(private presidentialVoterService: PresidentialVoteService) { }

    getPresidentialVoteResults() {
        this.presidentialVoterService.getVotes()
        .subscribe( (data: Array<object>) => {
                this.presidentialVoteResults = data;
            });
        }

    ngOnInit() {
        this.getPresidentialVoteResults();
    }

}

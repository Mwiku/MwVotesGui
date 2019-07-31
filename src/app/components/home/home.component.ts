import { Component, OnInit } from '@angular/core';
import { PresidentialVoteService } from '../../services/presidential-vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public presidentialVoteResults;
  public totalRegisteredVoters = '~ 6.8M';
  public leadingPartyVotes: number;
  public trailingPartyVotes: number;
    public numberOfPresidentilCandidates = 7;

    public leadingPartyName: string;
    public leadingPartyColor: string;

    public trailingPartyName: string;
    public trailingPartyColor: string;

    public totalVotes = 6;

    public voterPercentage: number;
  dateToday = Date.now();
  constructor(private presidentialVoterService: PresidentialVoteService ) { }

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

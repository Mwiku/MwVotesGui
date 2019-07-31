import { Component, OnInit } from '@angular/core';
import { PresidentialVoteService } from '../../services/presidential-vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public presidentialVoteResults;
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

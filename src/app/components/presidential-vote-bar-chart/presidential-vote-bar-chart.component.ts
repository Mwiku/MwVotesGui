import { Component, OnInit } from '@angular/core';
import { PresidentialVoteService } from '../../services/presidential-vote.service';

@Component({
  selector: 'app-presidential-vote-bar-chart',
  templateUrl: './presidential-vote-bar-chart.component.html',
  styleUrls: ['./presidential-vote-bar-chart.component.css']
})
export class PresidentialVoteBarChartComponent implements OnInit {

  constructor(private presidentialVoteService: PresidentialVoteService) {

  }

  public barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
};

public barChartLabels: string[] = [];
private votesData: number [] = [];
public barChartType = 'bar';
public partyColors: string[] = [];

public barChartColors: Object[] = [{ backgroundColor: this.partyColors}];


public barChartData: Object[]  = [
{data: this.votesData, label: 'Presidential vote chart'},

];

private getPresidentialVoteResults() {
this.presidentialVoteService.getVotes()
    .subscribe((data) => this.getVoteResultsData(data),
    error => console.log('error getting data for bar chart'),
    () => console.log('complete getting bar chart data')
    );
}


private getVoteResultsData( data) {
const resultsData = data;
for (let i = 0; i < resultsData.length ;  i++) {
    this.votesData.push(resultsData[i].votes);
    this.barChartLabels.push(resultsData[i].abbreviation);
    this.partyColors.push(resultsData[i].partyColor);
}
this.redrawChart();
}


private redrawChart() {
this.barChartData = [{data: this.votesData}];
this.barChartColors = [{backgroundColors: this.partyColors}];
const clone = JSON.parse(JSON.stringify(this.barChartData));
this.barChartData = clone;
}

ngOnInit() {
this.getPresidentialVoteResults();
}


}

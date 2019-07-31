import { Component, OnInit } from '@angular/core';
import { IPresidentialVoteResult } from '../../interfaces/presidential-vote-result';

import { PresidentialVoteService } from '../../services/presidential-vote.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-parliamentary-vote-pie-chart',
  templateUrl: './parliamentary-vote-pie-chart.component.html',
  styleUrls: ['./parliamentary-vote-pie-chart.component.css']
})
export class ParliamentaryVotePieChartComponent implements OnInit {

  constructor(private presidentialVoteService: PresidentialVoteService) { }

  public results: IPresidentialVoteResult[] ;
  public chart: BaseChartDirective;

  public pieChartOptions: any = {
      responsive: true,
      maintainAspectRatio: false
  };

  public pieChartLabels: string [] = [];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public partyColors: string [] = [];
  public pieChartColors: Object[] = [{backgroundColor: this.partyColors}];

  private votesData: number[] = [];

  public pieChartData: Object [] = [
      {data: this.votesData , label: 'Pie Chart(Top 3)'}
  ];

  getResults (): void {
      this.presidentialVoteService.getSortedVotes()
          .subscribe(data => this.getResultsData(data),
          error => console.log('some error'),
          () => console.log('done getting data for pie chart')
      );
  }

  private getResultsData( data ) {
      const resultsNews = data;
      for (let i = 0 ; i < resultsNews.length; i++) {
          this.votesData.push(resultsNews[i].numberOfMembersOfParliament);
          this.pieChartLabels.push(resultsNews[i].abbreviation);
          this.partyColors.push(resultsNews[i].partyColor);
      }
      this.redrawChart();
  }

     private redrawChart () {
      this.pieChartData = [{data: this.votesData, label: 'Pie Chart'}];
      this.pieChartColors = [{backgroundColor: this.partyColors}];
      const clone  = JSON.parse(JSON.stringify(this.pieChartData));

      this.pieChartData = clone;
  }

  ngOnInit() {
      this.getResults();
  }

}

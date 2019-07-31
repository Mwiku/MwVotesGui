import { Component, OnInit } from '@angular/core';
import { IPresidentialVoteResult } from '../../interfaces/presidential-vote-result';
import { PresidentialVoteService } from '../../services/presidential-vote.service';

// import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-presidential-vote-pie-chart',
  templateUrl: './presidential-vote-pie-chart.component.html',
  styleUrls: ['./presidential-vote-pie-chart.component.css']
})
export class PresidentialVotePieChartComponent implements OnInit {

  constructor(private presidentialVoteService: PresidentialVoteService) { }

  public results: IPresidentialVoteResult[] ;
    // public chart: BaseChartDirective;

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
        for (let i = 0 ; i < 3; i++) {
            this.votesData.push(resultsNews[i].votes);
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

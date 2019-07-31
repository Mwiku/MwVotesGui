import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  NavbarComponent,
  HomeComponent,
  PresidentialVoteComponent,
  ParliamentaryVoteComponent,
  OverviewComponent,
  ContactUsComponent
} from './components/index';
import { PresidentialVoteBarChartComponent } from './components/presidential-vote-bar-chart/presidential-vote-bar-chart.component';
import { PresidentialVotePieChartComponent } from './components/presidential-vote-pie-chart/presidential-vote-pie-chart.component';
import { ParliamentaryVotePieChartComponent } from './components/parliamentary-vote-pie-chart/parliamentary-vote-pie-chart.component';
import { ParliamentaryVoteTableComponent } from './components/parliamentary-vote-table/parliamentary-vote-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PresidentialVoteComponent,
    ParliamentaryVoteComponent,
    OverviewComponent,
    ContactUsComponent,
    PresidentialVoteBarChartComponent,
    PresidentialVotePieChartComponent,
    ParliamentaryVotePieChartComponent,
    ParliamentaryVoteTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

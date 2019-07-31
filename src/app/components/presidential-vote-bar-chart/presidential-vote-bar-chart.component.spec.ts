import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialVoteBarChartComponent } from './presidential-vote-bar-chart.component';

describe('PresidentialVoteBarChartComponent', () => {
  let component: PresidentialVoteBarChartComponent;
  let fixture: ComponentFixture<PresidentialVoteBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentialVoteBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentialVoteBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

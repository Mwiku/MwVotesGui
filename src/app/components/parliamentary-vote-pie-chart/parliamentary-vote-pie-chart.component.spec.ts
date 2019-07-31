import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentaryVotePieChartComponent } from './parliamentary-vote-pie-chart.component';

describe('ParliamentaryVotePieChartComponent', () => {
  let component: ParliamentaryVotePieChartComponent;
  let fixture: ComponentFixture<ParliamentaryVotePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentaryVotePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentaryVotePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialVotePieChartComponent } from './presidential-vote-pie-chart.component';

describe('PresidentialVotePieChartComponent', () => {
  let component: PresidentialVotePieChartComponent;
  let fixture: ComponentFixture<PresidentialVotePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentialVotePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentialVotePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

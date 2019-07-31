import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentaryVoteTableComponent } from './parliamentary-vote-table.component';

describe('ParliamentaryVoteTableComponent', () => {
  let component: ParliamentaryVoteTableComponent;
  let fixture: ComponentFixture<ParliamentaryVoteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentaryVoteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentaryVoteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

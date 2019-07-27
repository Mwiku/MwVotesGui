import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialVoteComponent } from './presidential-vote.component';

describe('PresidentialVoteComponent', () => {
  let component: PresidentialVoteComponent;
  let fixture: ComponentFixture<PresidentialVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentialVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentialVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

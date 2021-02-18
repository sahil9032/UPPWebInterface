import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolveComponent } from './problem-solve.component';

describe('ProblemSolveComponent', () => {
  let component: ProblemSolveComponent;
  let fixture: ComponentFixture<ProblemSolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSolveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

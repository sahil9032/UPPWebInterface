import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectQuestionComponent } from './subject-question.component';

describe('SubjectQuestionComponent', () => {
  let component: SubjectQuestionComponent;
  let fixture: ComponentFixture<SubjectQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

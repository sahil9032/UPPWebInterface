import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcrecordComponent } from './plcrecord.component';

describe('PlcrecordComponent', () => {
  let component: PlcrecordComponent;
  let fixture: ComponentFixture<PlcrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlcrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

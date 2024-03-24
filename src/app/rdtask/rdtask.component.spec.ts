import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdtaskComponent } from './rdtask.component';

describe('RdtaskComponent', () => {
  let component: RdtaskComponent;
  let fixture: ComponentFixture<RdtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdtaskComponent]
    });
    fixture = TestBed.createComponent(RdtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

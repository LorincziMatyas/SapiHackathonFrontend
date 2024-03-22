import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponent } from './mock.component';

describe('MockComponent', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent]
    });
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

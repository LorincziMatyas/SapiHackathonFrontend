import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialreportpageComponent } from './financialreportpage.component';

describe('FinancialreportpageComponent', () => {
  let component: FinancialreportpageComponent;
  let fixture: ComponentFixture<FinancialreportpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialreportpageComponent]
    });
    fixture = TestBed.createComponent(FinancialreportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

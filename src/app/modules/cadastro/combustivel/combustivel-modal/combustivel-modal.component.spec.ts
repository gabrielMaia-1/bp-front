import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustivelModalComponent } from './combustivel-modal.component';

describe('CombustivelModalComponent', () => {
  let component: CombustivelModalComponent;
  let fixture: ComponentFixture<CombustivelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustivelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombustivelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

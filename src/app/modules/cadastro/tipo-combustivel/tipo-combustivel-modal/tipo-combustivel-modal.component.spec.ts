import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCombustivelModalComponent } from './tipo-combustivel-modal.component';

describe('TipoCombustivelModalComponent', () => {
  let component: TipoCombustivelModalComponent;
  let fixture: ComponentFixture<TipoCombustivelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCombustivelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCombustivelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

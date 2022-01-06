import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCombustivelComponent } from './cadastro-combustivel.component';

describe('CadastroCombustivelComponent', () => {
  let component: CadastroCombustivelComponent;
  let fixture: ComponentFixture<CadastroCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

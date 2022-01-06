import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPostoComponent } from './posto.component';

describe('CadastroPostoComponent', () => {
  let component: CadastroPostoComponent;
  let fixture: ComponentFixture<CadastroPostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

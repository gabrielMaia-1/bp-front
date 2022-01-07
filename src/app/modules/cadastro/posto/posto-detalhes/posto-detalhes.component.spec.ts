import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoDetalhesComponent } from './posto-detalhes.component';

describe('PostoDetalhesComponent', () => {
  let component: PostoDetalhesComponent;
  let fixture: ComponentFixture<PostoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

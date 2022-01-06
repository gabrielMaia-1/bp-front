import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoModalComponent } from './posto-modal.component';

describe('PostoModalComponent', () => {
  let component: PostoModalComponent;
  let fixture: ComponentFixture<PostoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

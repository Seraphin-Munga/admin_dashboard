import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImgComponent } from './background-img.component';

describe('BackgroundImgComponent', () => {
  let component: BackgroundImgComponent;
  let fixture: ComponentFixture<BackgroundImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

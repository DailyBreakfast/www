import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieferdienstWerdenComponent } from './lieferdienst-werden.component';

describe('LieferdienstWerdenComponent', () => {
  let component: LieferdienstWerdenComponent;
  let fixture: ComponentFixture<LieferdienstWerdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieferdienstWerdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieferdienstWerdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

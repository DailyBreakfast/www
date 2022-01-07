import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboPageComponent } from './abo-page.component';

describe('AboPageComponent', () => {
  let component: AboPageComponent;
  let fixture: ComponentFixture<AboPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

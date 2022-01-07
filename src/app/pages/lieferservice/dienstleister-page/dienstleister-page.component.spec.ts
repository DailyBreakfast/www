import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DienstleisterPageComponent } from './dienstleister-page.component';

describe('DienstleisterPageComponent', () => {
  let component: DienstleisterPageComponent;
  let fixture: ComponentFixture<DienstleisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DienstleisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DienstleisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

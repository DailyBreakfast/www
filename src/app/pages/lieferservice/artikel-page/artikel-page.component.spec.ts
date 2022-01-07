import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelPageComponent } from './artikel-page.component';

describe('ArtikelPageComponent', () => {
  let component: ArtikelPageComponent;
  let fixture: ComponentFixture<ArtikelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

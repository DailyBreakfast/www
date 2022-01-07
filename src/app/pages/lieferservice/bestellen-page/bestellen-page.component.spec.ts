import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellenPageComponent } from './bestellen-page.component';

describe('BestellenPageComponent', () => {
  let component: BestellenPageComponent;
  let fixture: ComponentFixture<BestellenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

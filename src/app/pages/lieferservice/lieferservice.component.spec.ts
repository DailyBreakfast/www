import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieferserviceComponent } from './lieferservice.component';

describe('LieferserviceComponent', () => {
  let component: LieferserviceComponent;
  let fixture: ComponentFixture<LieferserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieferserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LieferserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

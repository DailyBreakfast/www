import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinstellungenPageComponent } from './einstellungen-page.component';

describe('EinstellungenPageComponent', () => {
  let component: EinstellungenPageComponent;
  let fixture: ComponentFixture<EinstellungenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinstellungenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinstellungenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

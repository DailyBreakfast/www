import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { AppModule } from '../../app.module';
import {APP_BASE_HREF} from '@angular/common';

import { ImpressumComponent } from './impressum.component';

describe('ImpressumComponent', () => {
  let component: ImpressumComponent;
  let fixture: ComponentFixture<ImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressumComponent ],
      imports: [AppModule],
      providers: [MatDialog, {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('version', () => {
    expect(component.version).toContain('.');
  });
});

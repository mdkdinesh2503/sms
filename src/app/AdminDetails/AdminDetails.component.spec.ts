/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminDetailsComponent } from './AdminDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { AdminNavbarComponent } from '../AdminNavbar/AdminNavbar.component';
import { SearchComponent } from '../Search/Search.component';

describe('AdminDetailsComponent', () => {
  let component: AdminDetailsComponent;
  let fixture: ComponentFixture<AdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailsComponent, AdminNavbarComponent, SearchComponent ],
      imports:[HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AdminDetailsComponent],
    providers: [
      {
        provide: NGXLogger,
        useValue: {
          // Create a mock of NGXLogger if needed
        },
      },
    ],
  }).compileComponents();
});

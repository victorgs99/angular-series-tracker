import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAcercadeComponent } from './main-acercade.component';

describe('MainAcercadeComponent', () => {
  let component: MainAcercadeComponent;
  let fixture: ComponentFixture<MainAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAcercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

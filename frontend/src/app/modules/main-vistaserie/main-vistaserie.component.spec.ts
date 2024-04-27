import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVistaserieComponent } from './main-vistaserie.component';

describe('MainVistaserieComponent', () => {
  let component: MainVistaserieComponent;
  let fixture: ComponentFixture<MainVistaserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVistaserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVistaserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

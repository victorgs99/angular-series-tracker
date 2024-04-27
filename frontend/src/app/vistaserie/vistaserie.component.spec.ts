import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaserieComponent } from './vistaserie.component';

describe('VistaserieComponent', () => {
  let component: VistaserieComponent;
  let fixture: ComponentFixture<VistaserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaserieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

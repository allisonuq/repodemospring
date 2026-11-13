import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservas } from './view-reservas';

describe('ViewReservas', () => {
  let component: ViewReservas;
  let fixture: ComponentFixture<ViewReservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReservas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReservas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

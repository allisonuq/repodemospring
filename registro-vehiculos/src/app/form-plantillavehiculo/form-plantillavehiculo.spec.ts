import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantillavehiculo } from './form-plantillavehiculo';

describe('FormPlantillavehiculo', () => {
  let component: FormPlantillavehiculo;
  let fixture: ComponentFixture<FormPlantillavehiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlantillavehiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlantillavehiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

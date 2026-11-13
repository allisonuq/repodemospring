import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreComponente } from './nombre-componente';

describe('NombreComponente', () => {
  let component: NombreComponente;
  let fixture: ComponentFixture<NombreComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

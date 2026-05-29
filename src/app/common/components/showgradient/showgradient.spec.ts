import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showgradient } from './showgradient';

describe('Showgradient', () => {
  let component: Showgradient;
  let fixture: ComponentFixture<Showgradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showgradient],
    }).compileComponents();

    fixture = TestBed.createComponent(Showgradient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

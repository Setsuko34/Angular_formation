import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simpleselector } from './simpleselector';

describe('Simpleselector', () => {
  let component: Simpleselector;
  let fixture: ComponentFixture<Simpleselector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpleselector],
    }).compileComponents();

    fixture = TestBed.createComponent(Simpleselector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

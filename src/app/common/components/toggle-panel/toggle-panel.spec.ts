import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePanel } from './toggle-panel';

describe('TogglePanel', () => {
  let component: TogglePanel;
  let fixture: ComponentFixture<TogglePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(TogglePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

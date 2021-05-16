import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymproComponent } from './gympro.component';

describe('GymproComponent', () => {
  let component: GymproComponent;
  let fixture: ComponentFixture<GymproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

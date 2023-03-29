import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceAvailComponent } from './place-avail.component';

describe('PlaceAvailComponent', () => {
  let component: PlaceAvailComponent;
  let fixture: ComponentFixture<PlaceAvailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceAvailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

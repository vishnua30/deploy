import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckCompComponent } from './truck-comp.component';

describe('TruckCompComponent', () => {
  let component: TruckCompComponent;
  let fixture: ComponentFixture<TruckCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

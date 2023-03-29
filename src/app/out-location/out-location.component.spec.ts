import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutLocationComponent } from './out-location.component';

describe('OutLocationComponent', () => {
  let component: OutLocationComponent;
  let fixture: ComponentFixture<OutLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

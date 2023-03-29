import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutExtraComponent } from './out-extra.component';

describe('OutExtraComponent', () => {
  let component: OutExtraComponent;
  let fixture: ComponentFixture<OutExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

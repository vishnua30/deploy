import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoactiondescCompComponent } from './loactiondesc-comp.component';

describe('LoactiondescCompComponent', () => {
  let component: LoactiondescCompComponent;
  let fixture: ComponentFixture<LoactiondescCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoactiondescCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoactiondescCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

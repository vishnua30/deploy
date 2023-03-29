import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LginCompComponent } from './lgin-comp.component';

describe('LginCompComponent', () => {
  let component: LginCompComponent;
  let fixture: ComponentFixture<LginCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LginCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LginCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

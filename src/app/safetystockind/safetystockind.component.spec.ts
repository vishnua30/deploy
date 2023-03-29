import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetystockindComponent } from './safetystockind.component';

describe('SafetystockindComponent', () => {
  let component: SafetystockindComponent;
  let fixture: ComponentFixture<SafetystockindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetystockindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetystockindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

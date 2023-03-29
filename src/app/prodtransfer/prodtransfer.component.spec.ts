import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdtransferComponent } from './prodtransfer.component';

describe('ProdtransferComponent', () => {
  let component: ProdtransferComponent;
  let fixture: ComponentFixture<ProdtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdtransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

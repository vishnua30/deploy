import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCraftComponent } from './product-craft.component';

describe('ProductCraftComponent', () => {
  let component: ProductCraftComponent;
  let fixture: ComponentFixture<ProductCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

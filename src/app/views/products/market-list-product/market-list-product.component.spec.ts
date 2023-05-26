import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketListProductComponent } from './market-list-product.component';

describe('MarketListProductComponent', () => {
  let component: MarketListProductComponent;
  let fixture: ComponentFixture<MarketListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketListProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

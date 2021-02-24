import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPanelComponent } from './production-panel.component';

describe('ProductionPanelComponent', () => {
  let component: ProductionPanelComponent;
  let fixture: ComponentFixture<ProductionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

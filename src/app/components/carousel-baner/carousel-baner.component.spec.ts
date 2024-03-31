import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBanerComponent } from './carousel-baner.component';

describe('CarouselBanerComponent', () => {
  let component: CarouselBanerComponent;
  let fixture: ComponentFixture<CarouselBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselBanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

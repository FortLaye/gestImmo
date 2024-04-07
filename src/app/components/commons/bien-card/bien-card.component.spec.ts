import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienCardComponent } from './bien-card.component';

describe('BienCardComponent', () => {
  let component: BienCardComponent;
  let fixture: ComponentFixture<BienCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BienCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BienCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

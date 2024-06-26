import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFilterComponent } from './aside-filter.component';

describe('AsideFilterComponent', () => {
  let component: AsideFilterComponent;
  let fixture: ComponentFixture<AsideFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

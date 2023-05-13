import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HahahaComponent } from './hahaha.component';

describe('HahahaComponent', () => {
  let component: HahahaComponent;
  let fixture: ComponentFixture<HahahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HahahaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HahahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

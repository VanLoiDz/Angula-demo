import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicgenreComponent } from './comicgenre.component';

describe('ComicgenreComponent', () => {
  let component: ComicgenreComponent;
  let fixture: ComponentFixture<ComicgenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicgenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

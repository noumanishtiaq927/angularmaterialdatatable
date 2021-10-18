import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatabelComponent } from './datatabel.component';

describe('DatatabelComponent', () => {
  let component: DatatabelComponent;
  let fixture: ComponentFixture<DatatabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

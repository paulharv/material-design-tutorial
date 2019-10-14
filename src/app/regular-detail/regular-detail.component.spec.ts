import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDetailComponent } from './regular-detail.component';

describe('RegularDetailComponent', () => {
  let component: RegularDetailComponent;
  let fixture: ComponentFixture<RegularDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalhomeComponent } from './internalhome.component';

describe('InternalhomeComponent', () => {
  let component: InternalhomeComponent;
  let fixture: ComponentFixture<InternalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

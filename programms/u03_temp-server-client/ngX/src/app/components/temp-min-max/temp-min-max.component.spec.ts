import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMinMaxComponent } from './temp-min-max.component';

describe('TempMinMaxComponent', () => {
  let component: TempMinMaxComponent;
  let fixture: ComponentFixture<TempMinMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempMinMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

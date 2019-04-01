import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelllerSignupComponent } from './telller-signup.component';

describe('TelllerSignupComponent', () => {
  let component: TelllerSignupComponent;
  let fixture: ComponentFixture<TelllerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelllerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelllerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

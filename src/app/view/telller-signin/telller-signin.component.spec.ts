import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelllerSigninComponent } from './telller-signin.component';

describe('TelllerSigninComponent', () => {
  let component: TelllerSigninComponent;
  let fixture: ComponentFixture<TelllerSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelllerSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelllerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

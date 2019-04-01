import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelllerHomepageComponent } from './telller-homepage.component';

describe('TelllerHomepageComponent', () => {
  let component: TelllerHomepageComponent;
  let fixture: ComponentFixture<TelllerHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelllerHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelllerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

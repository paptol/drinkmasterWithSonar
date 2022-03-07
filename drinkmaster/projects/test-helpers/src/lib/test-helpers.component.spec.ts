import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHelpersComponent } from './test-helpers.component';

describe('TestHelpersComponent', () => {
  let component: TestHelpersComponent;
  let fixture: ComponentFixture<TestHelpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHelpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

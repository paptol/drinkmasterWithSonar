import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharsComponent } from './chars.component';

describe('CharsComponent', () => {
  let component: CharsComponent;
  let fixture: ComponentFixture<CharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit letter when clicked', () => {
    let letter = 'a';

    let spy = spyOn(component.charSelected, 'emit');
    component.charClicked(letter);

    expect(spy).toHaveBeenCalledWith(letter);
  });

});

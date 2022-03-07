import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestHelpersModule } from 'projects/test-helpers/src/public-api';
import { of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoctailDetailsModel } from 'src/app/models/CoctailDetailsModel';
import { CoctailDbService } from 'src/app/services/coctail-db.service';

import { DrinkDetailsComponent } from './drink-details.component';

describe('DrinkDetailsComponent', () => {
  let component: DrinkDetailsComponent;
  let fixture: ComponentFixture<DrinkDetailsComponent>;
  let coctailService: CoctailDbService;
  //let route:ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TestHelpersModule], //RouterTestingModule.withRoutes([])],
      declarations: [ DrinkDetailsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkDetailsComponent);
    component = fixture.componentInstance;
    coctailService = TestBed.inject(CoctailDbService);
    //route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

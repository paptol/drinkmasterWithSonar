import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TestHelpersModule } from 'projects/test-helpers/src/public-api';
import { of } from 'rxjs';
import { CoctailListModel } from 'src/app/models/CoctailListModel';
import { CoctailDbService } from 'src/app/services/coctail-db.service';
import { DrinkScreenComponent } from './drink-screen.component';
import {delay } from 'rxjs/operators';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkListItemComponent } from './drink-list/drink-list-item/drink-list-item.component';
import { CharsComponent } from './chars/chars.component';

describe('DrinkScreenComponent', () => {
  let component: DrinkScreenComponent;
  let fixture: ComponentFixture<DrinkScreenComponent>;
  let coctailService: CoctailDbService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHelpersModule],
      declarations: [ DrinkScreenComponent, DrinkListComponent, DrinkListItemComponent, CharsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkScreenComponent);
    component = fixture.componentInstance;
    coctailService = TestBed.inject(CoctailDbService);
    // service is called in onInit(). We can make it return meaningfull data in every test, or just where we will test for it...
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load drinks with a onInit', done => {
    let drinks = getSomeDrinks('a');
    spyOn(coctailService, 'getDrinksByLetter').and.returnValue(of(drinks));

    component.ngOnInit();

    expect(component.coctails).toEqual(drinks);
    done();
  });

});

function getSomeDrinks(theChar: string): Array<CoctailListModel> {
  let c1 = new CoctailListModel();
  c1.idDrink = '42';
  c1.strDrink = `${theChar}drink`;

  let c2 = new CoctailListModel();
  c2.idDrink = '43';
  c2.strDrink = `${theChar}drink`;

  let c3 = new CoctailListModel();
  c3.idDrink = '44';
  c3.strDrink = `${theChar}drink`;

  return [c1, c2, c3];
}


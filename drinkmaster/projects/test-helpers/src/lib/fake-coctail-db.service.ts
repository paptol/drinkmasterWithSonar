import { Observable, of } from "rxjs";
import { CoctailDetailsModel } from "src/app/models/CoctailDetailsModel";
import { CoctailListModel } from "src/app/models/CoctailListModel";

export class FakeCoctailDbService {
  getDrinksByLetter(letter: string): Observable<Array<CoctailListModel>>{
    return of([]);
  }
  getDetails(drinkId: string):Observable<CoctailDetailsModel> {
    return of(new CoctailDetailsModel());
  }
}

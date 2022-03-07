import { Component, OnInit } from '@angular/core';
import { CoctailListModel } from 'src/app/models/CoctailListModel';
import { CoctailDbService } from 'src/app/services/coctail-db.service';

@Component({
  selector: 'app-drink-screen',
  templateUrl: './drink-screen.component.html',
  styleUrls: ['./drink-screen.component.css']
})
export class DrinkScreenComponent implements OnInit {

  selectedChar: string = 'a';
  coctails: Array<CoctailListModel> = [];
  constructor(private coctailService: CoctailDbService) { }

  ngOnInit(): void {
    this.loadCoctails();
  }

  private loadCoctails(){
    this.coctailService.getDrinksByLetter(this.selectedChar).subscribe(coctails => {
      this.coctails = coctails;
      //To prove a point...
      // let something = this.coctails.find(x => x.strDrink == 'adrink');
      // console.log(something.strAlcoholic);
    });
  }

  charSelected(theChar: string) {
    this.selectedChar = theChar;
    this.loadCoctails();
  }
}

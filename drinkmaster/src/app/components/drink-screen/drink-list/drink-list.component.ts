import { Component, Input, OnInit } from '@angular/core';
import { CoctailListModel } from 'src/app/models/CoctailListModel';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {
  @Input() coctails: Array<CoctailListModel> = [];

  constructor() { }

  ngOnInit(): void {
  }
  public trackItem (index: number, item: CoctailListModel) {
    return item.idDrink;
  }
}

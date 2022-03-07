import { Component, Input, OnInit } from '@angular/core';
import { CoctailListModel } from 'src/app/models/CoctailListModel';

@Component({
  selector: 'app-drink-list-item',
  templateUrl: './drink-list-item.component.html',
  styleUrls: ['./drink-list-item.component.css']
})
export class DrinkListItemComponent implements OnInit {
  @Input() coctail: CoctailListModel;
  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.isExpanded = !this.isExpanded;
  }
}

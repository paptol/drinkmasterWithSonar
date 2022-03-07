import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {
  @Output() charSelected = new EventEmitter<string>();

  chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  constructor() { }

  ngOnInit(): void {
  }

  charClicked(theChar: string){
    this.charSelected.emit(theChar);
  }
}

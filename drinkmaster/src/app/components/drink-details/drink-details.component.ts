import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoctailDetailsModel } from 'src/app/models/CoctailDetailsModel';
import { CoctailDbService } from 'src/app/services/coctail-db.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {
  @Input() drinkId: string ;
  @Input() inlineExpanded:boolean ;
  coctail: CoctailDetailsModel;
  constructor(private route: ActivatedRoute, private coctailService: CoctailDbService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.id){
        this.drinkId = params.id;
      }
    });

    if(this.drinkId){
      this.coctailService.getDetails(this.drinkId).subscribe(data => {
        this.coctail = data;
      });
    }
  }
}

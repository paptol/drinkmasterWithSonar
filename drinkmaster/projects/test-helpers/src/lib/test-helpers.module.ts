import { NgModule } from '@angular/core';
import { CoctailDbService } from 'src/app/services/coctail-db.service';
import { FakeCoctailDbService } from './fake-coctail-db.service';
import { TestHelpersComponent } from './test-helpers.component';



@NgModule({
  declarations: [
    TestHelpersComponent
  ],
  imports: [
  ],
  exports: [
    TestHelpersComponent
  ],
  providers: [
    {provide: CoctailDbService, useClass: FakeCoctailDbService}
  ]
})
export class TestHelpersModule { }

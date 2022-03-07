import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DrinkScreenComponent } from './components/drink-screen/drink-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'drinks' },
  { path: 'drinks', component: DrinkScreenComponent},
  { path: 'drinks/:id', component: DrinkDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

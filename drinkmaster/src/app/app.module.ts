import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkScreenComponent } from './components/drink-screen/drink-screen.component';
import { CharsComponent } from './components/drink-screen/chars/chars.component';
import { DrinkListComponent } from './components/drink-screen/drink-list/drink-list.component';
import { DrinkListItemComponent } from './components/drink-screen/drink-list/drink-list-item/drink-list-item.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkScreenComponent,
    CharsComponent,
    DrinkListComponent,
    DrinkListItemComponent,
    DrinkDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

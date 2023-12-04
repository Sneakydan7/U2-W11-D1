import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: FirstpageComponent,
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
];

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstpageComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

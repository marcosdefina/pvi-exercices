import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { FooterComponent }      from './footer/footer.component'
import { HeaderComponent }      from './header/header.component';
import { ExercicesComponent }   from './exercices/exercices.component';
import { Template1 }   from './exercices/HTML/Ex1/Template1.component';
import { HTMLComponent }   from './exercices/HTML/html.component';
import { CGIBINComponent } from './exercices/CGIBin/cgibin.component';
import { Ex3Component } from './exercices/HTML/Ex3/ex3.component';
import { Ex2Component } from './exercices/HTML/Ex2/ex2.component';
import { PhpComponent } from './exercices/PHP/php.component';
import { ProcessingComponent } from './exercices/Processing/processing.component';
import { SqliteComponent } from './exercices/SQLite/sqlite.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    FooterComponent,
    HeaderComponent,
    HeroSearchComponent,
    ExercicesComponent,
    Template1,
    HTMLComponent,
    CGIBINComponent,
    Ex3Component,
    Ex2Component,
    PhpComponent,
    ProcessingComponent,
    SqliteComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
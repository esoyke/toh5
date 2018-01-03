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
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

// Bootstrap, add modules as needed
//import { AlertModule } from 'ngx-bootstrap';

// theming
import { ThemeSelectComponent } from './theme-control/themeselect.component';
import { ThemeService }         from './theme-control/theme.service';

// custom AP2 components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarButtonComponent } from './sidebar-nav/sidebar-button/sidebar-button.component';
import { SidebarService }         from './sidebar-nav/sidebar.service';

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
    ),
    // Bootstrap imports, add as needed
    // AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ThemeSelectComponent,
    HeaderComponent,
    FooterComponent,
    SidebarNavComponent,
    SidebarButtonComponent,
  ],
  providers: [ HeroService, MessageService, ThemeService, SidebarService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

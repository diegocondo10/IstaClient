import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FichaSaludModule } from './modules/ficha-salud/ficha-salud.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    FormsModule,
    FichaSaludModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://127.0.0.1:8000/graphql'
          })
        }
      },
      deps: [HttpLink]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(
    //apollo: Apollo,
    //httpLink: HttpLink
  ) {
    /*     apollo.create({
          link: httpLink.create({
            uri: 'http://localhost:8000/graphql',
            //uri: 'http://35.192.7.211:80/graphql',
            method: 'GET'
          }),
          cache: new InMemoryCache()
        }); */
  }

}

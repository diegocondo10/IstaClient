import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModule, Apollo } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule
  ]
})
export class GraphQLConfigModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({
        //uri: 'http://localhost:8000/graphql'
        uri: 'http://35.192.7.211:8000/graphql'
      }),
      cache: new InMemoryCache()
    });
  }

}

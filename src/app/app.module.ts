import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component-main/app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'client', 
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./catalogue/catalogue.module').then((m) => m.CatalogueModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

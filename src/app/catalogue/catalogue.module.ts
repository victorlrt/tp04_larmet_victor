import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogueComponent } from './component-catalogue/product-catalogue.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

const catalogueRoutes: Routes = [
  { path: 'listMushrooms', component: ProductCatalogueComponent}

]


@NgModule({
  declarations: [
    ProductCatalogueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(catalogueRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    //NgxsModule.forFeature([ContactState])
  ],
  providers: []

})
export class CatalogueModule { }

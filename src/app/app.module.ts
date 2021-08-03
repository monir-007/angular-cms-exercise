import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductComponent} from './components/product/product.component';
import {CategoryComponent} from './components/category/category.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {StocksComponent} from './components/stocks/stocks.component';
import {ReportsComponent} from './components/reports/reports.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    SideMenuComponent,
    StocksComponent,
    ReportsComponent,
    SignUpComponent,
    ProductCreateComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ProductComponent} from './component/product/product.component';
import {CategoryComponent} from './component/category/category.component';
import {SideMenuComponent} from './component/side-menu/side-menu.component';
import {StocksComponent} from './component/stocks/stocks.component';
import {ReportsComponent} from './component/reports/reports.component';
import {FormsModule} from "@angular/forms";
import {SignUpComponent} from './component/sign-up/sign-up.component';


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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

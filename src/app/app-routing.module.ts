import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductComponent} from "./components/product/product.component";
import {CategoryComponent} from "./components/category/category.component";
import {StocksComponent} from "./components/stocks/stocks.component";
import {ReportsComponent} from "./components/reports/reports.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductCreateComponent} from "./components/product-create/product-create.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'stock', component: StocksComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

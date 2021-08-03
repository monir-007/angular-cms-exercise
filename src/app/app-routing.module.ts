import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ProductComponent} from "./component/product/product.component";
import {CategoryComponent} from "./component/category/category.component";
import {StocksComponent} from "./component/stocks/stocks.component";
import {ReportsComponent} from "./component/reports/reports.component";
import {SignInComponent} from "./component/sign-in/sign-in.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'stock', component: StocksComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

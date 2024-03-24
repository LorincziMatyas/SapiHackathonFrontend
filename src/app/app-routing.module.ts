import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { StockpageComponent } from './pages/stockpage/stockpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FinancialreportpageComponent } from './pages/financialreportpage/financialreportpage.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductpageComponent },
  { path: '', component: HomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'factoryPage', component: FactoryComponent },
  { path: 'stocks', component: StockpageComponent },
  { path: 'loginUser', component: LoginpageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'financialReportPage', component: FinancialreportpageComponent },
  { path: 'companyPage', component: CompanyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

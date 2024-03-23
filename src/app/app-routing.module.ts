import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FinancialreportpageComponent } from './pages/financialreportpage/financialreportpage.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductpageComponent },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  { path: 'factoryPage', component: FactoryComponent },
  {
    path: 'loginUser',
    component: LoginpageComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  { path: 'financialReportPage', component: FinancialreportpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

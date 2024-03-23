import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationComponent } from './pages/registration/registration.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductpageComponent },
  {
    path: 'home',
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
    // data: { hideNavbar: true },
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    // data: { hideNavbar: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

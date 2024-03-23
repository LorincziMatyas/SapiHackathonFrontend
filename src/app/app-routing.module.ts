import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactoryComponent } from './pages/factory/factory.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

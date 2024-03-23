import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent } from './components/mock/mock.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FactoryComponent } from './pages/factory/factory.component';
import { TableModule } from 'primeng/table';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MockComponent,
    HomepageComponent,
    NavbarComponent,
    ProductpageComponent,
    NavbarComponent,
    FactoryComponent,
    LoginpageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CanvasJSAngularChartsModule,
    CardModule,
    SliderModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

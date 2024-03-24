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
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { TableDialogComponent } from './components/table-dialog/table-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { StockpageComponent } from './pages/stockpage/stockpage.component';
import { ChartModule } from 'primeng/chart';
import { FinancialreportpageComponent } from './pages/financialreportpage/financialreportpage.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { ResAndDevPageComponent } from './pages/res-and-dev-page/res-and-dev-page.component';
import { BankPageComponent } from './pages/bank-page/bank-page.component';
// import { MatMomentDateModule } from '@angular/material-moment-adapter'; // Import the MatMomentDateModule

@NgModule({
  declarations: [
    AppComponent,
    MockComponent,
    HomepageComponent,
    NavbarComponent,
    ProductpageComponent,
    NavbarComponent,
    FactoryComponent,
    StockpageComponent,
    CustomDialogComponent,
    TableDialogComponent,
    LoginpageComponent,
    RegistrationComponent,
    FinancialreportpageComponent,
    CompanyPageComponent,
    ResAndDevPageComponent,
    BankPageComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    // MatMomentDateModule, // Add MatMomentDateModule to the imports array
    ReactiveFormsModule,
    DropdownModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}

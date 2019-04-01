import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';


import { TellerGuard } from './guard/teller.guard';
import { Authguard } from './guard/authguard';
import { AuthService } from './service/auth.service';
import { TellerService } from './service/teller.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelllerSignupComponent } from './view/telller-signup/telller-signup.component';
import { TelllerSigninComponent } from './view/telller-signin/telller-signin.component';
import { TelllerHomepageComponent } from './view/telller-homepage/telller-homepage.component';
import { FooterComponent } from './view/footer/footer.component';
// imp
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { SignupComponent } from './view/signup/signup.component';
import { DatePipe } from './date.pipe';
import {FormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS  } from "@angular/common/http";
import { MatDialogModule} from '@angular/material';
import { ErrorDialogComponent } from './error/error-dialog/error-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    TelllerSignupComponent,
    TelllerSigninComponent,
    TelllerHomepageComponent,
    FooterComponent,
    SignupComponent,
    DatePipe,
    ErrorDialogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    // MatPaginator,
    // MatSort,
    // MatTableDataSource
  ],
  providers: [
    TellerService,
    ErrorDialogComponent,
    AuthService,
    Authguard,
    TellerGuard,
    
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

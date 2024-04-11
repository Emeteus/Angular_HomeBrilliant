import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FullPageComponent } from './pages/full-page/full-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ViewComponent } from './pages/view/view.component';
import { ChangeProfileComponent } from './pages/profile/change-profile/change-profile.component';
import { LoginComponent } from './pages/auth-pages/login/login.component';
import { RegisterComponent } from './pages/auth-pages/register/register.component';
import { FaqConteinerComponent } from './shared/faq-conteiner/faq-conteiner.component';
import { FaqConteiner2Component } from './shared/faq-conteiner2/faq-conteiner2.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdsComponent } from './pages/ads/ads.component';
import {NgOptimizedImage} from "@angular/common";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClientModule, HttpClient} from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogComponent,
    ContactsComponent,
    ErrorPageComponent,
    FaqComponent,
    FullPageComponent,
    HomeComponent,
    PrivacyComponent,
    ViewComponent,
    ChangeProfileComponent,
    LoginComponent,
    RegisterComponent,
    FaqConteinerComponent,
    FaqConteiner2Component,
    FooterComponent,
    HeaderComponent,
    AdsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule,
        TranslateModule.forRoot({
          loader:{
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

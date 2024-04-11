import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FullPageComponent} from "./pages/full-page/full-page.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ChangeProfileComponent} from "./pages/profile/change-profile/change-profile.component";
import {ProfileComponent} from "./pages/profile/profile/profile.component";
import {ViewComponent} from "./pages/view/view.component";
import {LoginComponent} from "./pages/auth-pages/login/login.component";
import {RegisterComponent} from "./pages/auth-pages/register/register.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const routes: Routes = [
  {path: '',
  component: FullPageComponent,
  children:[
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'contacts', component: ContactsComponent },
    {path: 'privacy', component:  PrivacyComponent },
    {path: 'faq', component: FaqComponent },
    {path: 'catalog', component: CatalogComponent },
    {path: 'change', component:  ChangeProfileComponent },
    {path: 'profile', component: ProfileComponent },
    {path: 'view', component: ViewComponent },
  ]},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

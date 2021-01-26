import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SilderComponent } from './silder/silder.component';
import { ServicesComponent } from './services/services.component';
import { Router, Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'about',component:AboutComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'login',component:LoginComponent},
  {path:'contacto',component:ContactoComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent,
    ServicesComponent,
    HomeComponent,
    GaleriaComponent,
    AboutComponent,
    ContactoComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Asegúrate de que FormsModule esté importado

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProjectCardComponent } from './components/shared/project-card/project-card.component';
import { ContactComponent } from './components/contact/contact.component';  // Importamos ContactComponent correctamente

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    NavbarComponent,
    FooterComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactComponent  // Agregamos ContactComponent aquí como un standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

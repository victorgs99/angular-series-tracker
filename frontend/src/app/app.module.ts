import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//Modulos de seccion de paginas
import { HeaderComponent } from './modules/header/header.component';
import { MainIndexComponent } from './modules/main-index/main-index.component';
import { MainAcercadeComponent } from './modules/main-acercade/main-acercade.component';
import { MainVistaserieComponent } from './modules/main-vistaserie/main-vistaserie.component';

//Paginas
import { PrincipalComponent } from './principal/principal.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { VistaserieComponent } from './vistaserie/vistaserie.component';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'bitacoraserie/:id', component: VistaserieComponent},
  { path: 'acercade', component: AcercadeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainIndexComponent,
    AcercadeComponent,
    PrincipalComponent,
    MainAcercadeComponent,
    VistaserieComponent,
    MainVistaserieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Task/listar/listar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';
import { EditarComponent } from './Task/editar/editar.component';
import { LoginComponent } from './Login/login/login.component';
import { LogoutComponent } from './Logout/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    LoginComponent,
    LogoutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

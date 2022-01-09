import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { LogoutComponent } from './Logout/logout/logout.component';
import { EditarComponent} from './Task/editar/editar.component';
import { ListarComponent } from './Task/listar/listar.component';

const routes: Routes = [
  
  {path:'listar',component:ListarComponent},
  {path:'editar',component:EditarComponent},
  {path:'',component:LoginComponent},
  {path:'logout',component:LogoutComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

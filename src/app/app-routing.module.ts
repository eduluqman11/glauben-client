import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { authGuard } from './auth.guard';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { MainComponent } from './main/main.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'~admin~',component:RegisterComponent},
  {path:'~admin-dashboard~',component:AdminDashboardComponent,canActivate:[authGuard]},
  {path:'~collection~',component:CollectionComponent,canActivate:[authGuard]},
  {path:'Home',component:MainComponent},
  {path:'products',component:ProductComponent},
  {path:'Contact',component:ContactComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {path:'~register~',component:CreateaccountComponent},
  {path: '**', component: PagenofoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }


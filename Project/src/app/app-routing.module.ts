import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';



const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent,data:{breadcrumb:'Home'}},
  {path:"products",data:{breadcrumb:'Products'},children:[{path:'',component:ProductListComponent,data:{breadcrumb:'Products'}},{path:'detail',component:ProductDetailsComponent,data:{breadcrumb:'Detail'}}]},
  {path:'about',component:AboutUsComponent,data:{breadcrumb:'About'}},
  {path:'contact',component:ContactComponent,data:{breadcrumb:'Contact'}},
  {path:'profile',component:ProfileComponent,data:{breadcrumb:'Profile'}},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent,data:{breadcrumb:'Cart'}},
  {path:'checkout',component:CheckoutComponent,data:{breadcrumb:'CheckOut'}},
  {path:"**",component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

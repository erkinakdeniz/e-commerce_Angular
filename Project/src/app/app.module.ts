import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { FooterComponent } from './components/home/components/footer/footer.component';
import { HeaderComponent } from './components/home/components/header/header.component';
import { SidebarComponent } from './components/home/components/sidebar/sidebar.component';
import { TopHeaderComponent } from './components/home/components/header/top-header/top-header.component';
import { NewArrivalsComponent } from './components/home/components/new-arrivals/new-arrivals.component';
import { BrandBannerComponent } from './components/home/components/banners/brand-banner/brand-banner.component';
import { CarouselComponent } from './components/home/components/carousels/carousel/carousel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { DeliveryComponent } from './components/home/components/banners/delivery/delivery.component';
import { ShowroomComponent } from './components/home/components/showroom/showroom.component';
import { MiddleBannerComponent } from './components/home/components/banners/middle-banner/middle-banner.component';
import { BestsellerComponent } from './components/home/components/bestseller/bestseller.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    ContactComponent,
    HomeComponent,
    OrderComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProfileComponent,
    ProductFilterPipe,
    AddToCartComponent,
    AlertComponent,
    ApplicationErrorComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    TopHeaderComponent,
    NewArrivalsComponent,
    BrandBannerComponent,
    CarouselComponent,
    DeliveryComponent,
    ShowroomComponent,
    MiddleBannerComponent,
    BestsellerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

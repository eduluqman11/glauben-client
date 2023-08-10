import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { WorkGalleryComponent } from './work-gallery/work-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    CreateaccountComponent,
    HeaderComponent,
    CardComponent,
    ProductComponent,
    PagenofoundComponent,
    ContactComponent,
    FooterComponent,
    OurWorkComponent,
    AdminDashboardComponent,
    CollectionComponent,
    ProductsComponent,
    WorkGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }

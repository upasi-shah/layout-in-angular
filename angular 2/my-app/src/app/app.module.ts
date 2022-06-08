import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './My-component/header/header.component';
import { FooterComponent } from './My-component/footer/footer.component';
import { CategoriesComponent } from './My-component/categories/categories.component';
import { SliderComponent } from './My-component/slider/slider.component';
import { CheckoutComponent } from './My-component/checkout/checkout.component';
import { RecipeComponent } from './My-component/recipe/recipe.component';
import { ExtraComponent } from './My-component/extra/extra.component';
import { GalleryComponent } from './My-component/gallery/gallery.component';
import { InboxComponent } from './My-component/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    SliderComponent,
    CheckoutComponent,
    RecipeComponent,
    ExtraComponent,
    GalleryComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

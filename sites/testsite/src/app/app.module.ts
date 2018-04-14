import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardService } from './card.service';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// environment configuration
import { environment } from '../environments/environment';

// todo component
import { TodoComponent } from './components/todo/todo.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

// services
import { ProductService } from './services/product.service';
// import { PeticionesService } from './services/peticiones.service';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

// import routing
import { routing, appRoutingProviders } from './app.routing';
import { SinginComponent } from './singin/singin.component';
import { CarrosComponent } from './carros/carros.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TodoComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    SinginComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    CardService,
    ProductService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

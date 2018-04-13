// tslint:disable-next-line:eofline
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// importar componentes que se van a utilizar
import { CardComponent } from './card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cards', component: CardComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'register', component: SinginComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

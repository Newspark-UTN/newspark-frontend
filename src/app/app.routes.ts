import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent, NewsListComponent, ContactComponent } from './news';


const APP_ROUTES: Routes = [
    { path: '' , component: NewsListComponent },
    { path: 'category/:category', component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: 'contact', component: ContactComponent }
]


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(APP_ROUTES);
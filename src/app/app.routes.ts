import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent, NewsListComponent } from './news';


const APP_ROUTES: Routes = [
    { path: '' , component: NewsListComponent },
    { path: 'news/:id', component: NewsDetailComponent }
]


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(APP_ROUTES);
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MasonryModule } from '../../node_modules/angular2-masonry';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { MostPopularNewsComponent } from './news/most-popular-news.component';
import { NewsListItemComponent } from './news/news-list/news-list-item.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { ArticlesListComponent } from './news/news-detail/articles-list.component';
import { CardComponent } from './news/news-detail/card.component';
import { CardsListComponent } from './news/news-detail/cards-list.component';
import { SourceImageComponent } from './news/news-detail/source-image.component';
import { ContactComponent } from './news/contact/contact.component';
import { routing, appRoutingProviders } from './app.routes';
import { ArticleComponent } from './news/news-detail/article.component';
import { NewsService } from './shared/news.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { TimelineComponent } from './news/news-detail/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewsListComponent,
    MostPopularNewsComponent,
    NewsListItemComponent,
    NewsDetailComponent,
    ArticlesListComponent,
    CardsListComponent,
    CardComponent,
    SourceImageComponent,
    ArticleComponent,
    LoaderComponent,
    TimelineComponent
    ContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    routing,
    MasonryModule
  ],
  providers: [appRoutingProviders, NewsService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }

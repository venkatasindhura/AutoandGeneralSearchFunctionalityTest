import { SearchqueryapiService } from './services/searchqueryapi.service';
import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { HighlightTag } from 'angular-text-input-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   articlesCollection: any[];
   searchText: any;
   


  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.articlesCollection
  };

  public maxSize = 7;
  public directionLinks = true;
  public autoHide = false;
  public responsive = true;
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  constructor(private searchqueryapi: SearchqueryapiService) {
  }

  ngOnInit() {
    this.get_articles();
  }
  onPageChange(event: any) {
    console.log(event);
    this.config.currentPage = event;
  }

  get_articles() {
    this.searchqueryapi.getArticles()
    .subscribe
    (
      data => {
        this.articlesCollection = data.hits;
        console.log(data.hits);
      }
    );
  }
}





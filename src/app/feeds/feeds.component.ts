import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  posts: any[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize posts array with some initial data or fetch from a service
    this.fetchInitialPosts();
  }

  fetchInitialPosts() {
    // Example function to fetch initial posts data
    // You can replace this with actual service call to fetch posts
    // for (let i = 1; i <= 10; i++) {
    //   this.posts.push({ content: `Post ${i} content` });
    // }
    this.http.get<any[]>('/assets/posts.json').subscribe(posts => {
      this.posts = posts;
    });
  }

  loadMoreFeeds() {
    // Example function to load more feeds
    // You can fetch additional posts here and append to the existing posts array
    // For demonstration purpose, let's just duplicate existing posts
    this.posts = [...this.posts, ...this.posts];
  }

  searchPosts(keyword: string) {
    // Example function to search posts based on keyword
    // You can implement actual search logic here
    console.log('Searching for:', keyword);
  }
}

import {Component, OnInit} from '@angular/core';
import {PostServiceService} from '../../services/post-service.service';
import {IPost} from '../../models/ipost';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public posts: IPost[] = [];
  public newPosts: IPost[][] = [];

  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
    this.postService.getPost().subscribe(data => {
      this.posts = data;
      while (this.posts.length) {
        this.newPosts.push(this.posts.splice(0, 3));
      }
    });
  }
}

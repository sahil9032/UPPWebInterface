import {Component, OnInit} from '@angular/core';
import {IPost} from '../../models/ipost';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostServiceService} from '../../services/post-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id: string;
  // @ts-ignore
  public post: IPost;
  public commentForm: FormGroup;
  public message: string;

  constructor(private postService: PostServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.message = '';
    this.commentForm = this.formBuilder.group({
      author: ['Anonymous'],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.postService.getPostById(this.id).subscribe(data => {
      this.post = data;
      if (this.post._id === '-1') {
        this.router.navigate(['/error']);
      }
    });
  }

  add(): void {
    if (this.commentForm.invalid) {
      return;
    } else {
      const comment = {
        _id: this.post._id,
        author: 'Anonymous',
        content: this.commentForm.controls.content.value
      };
      this.postService.addComment(comment).subscribe(data => {
        if (data._id === '-1') {
          this.message = 'Unable to add commment';
        } else {
          this.ngOnInit();
        }
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {PostServiceService} from '../../services/post-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public postForm: FormGroup;
  public message: string;

  constructor(private postService: PostServiceService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      file: ['', Validators.required],
      content: ['', Validators.required],
      token: [localStorage.getItem('token')]
    });
    this.message = '';
  }

  ngOnInit(): void {
  }

  onFileChanged(event: any, field: string): void {
    if (event.target.files.length > 0) {
      const [file] = event.target.files;
      this.postForm.patchValue({
        [field]: file
      });
    }
  }

  addPost(): void {
    this.message = 'Uploading...';
    if (this.postForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      Object.entries(this.postForm.value).forEach(
        ([key, value]: any[]) => {
          formData.set(key, value);
        });
      this.postService.addPost(formData).subscribe(data => {
        window.alert('Added Successfully');
        this.router.navigate(['/index']);
      }, error => {
        this.router.navigate(['/internalerror']);
      });
    }
  }

}

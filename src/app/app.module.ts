import { SubjectQuestionComponent } from './client/subject-question/subject-question.component';
import { QuizComponent } from './client/quiz/quiz.component';
import { PlcrecordComponent } from './client/plcrecord/plcrecord.component';
import { PlacementComponent } from './client/placement/placement.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './client/index/index.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './client/post/post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import {RecaptchaModule} from 'ng-recaptcha';
import { ServerErrorComponent } from './server-error/server-error.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './expert/add-post/add-post.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    IndexComponent,
    PostComponent,
    TermsAndConditionsComponent,
    ServerErrorComponent,
    LoginComponent,
    AddPostComponent,
    AccessDeniedComponent,
    RegisterComponent,
    PlacementComponent,
    PlcrecordComponent,
    QuizComponent,
    SubjectQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

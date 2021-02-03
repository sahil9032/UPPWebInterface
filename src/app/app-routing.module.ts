import { PlcrecordComponent } from './client/plcrecord/plcrecord.component';
import { SubjectQuestionComponent } from './client/subject-question/subject-question.component';
import { QuizComponent } from './client/quiz/quiz.component';
import { PlacementComponent } from './client/placement/placement.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IndexComponent} from './client/index/index.component';
import {PostComponent} from './client/post/post.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {ServerErrorComponent} from './server-error/server-error.component';
import {LoginComponent} from './login/login.component';
import {AddPostComponent} from './expert/add-post/add-post.component';
import {AuthGuard} from './guard/auth.guard';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'upp-login', component: LoginComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'placement', component: PlacementComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'question', component: SubjectQuestionComponent},
  {path: 'plcrecord', component: PlcrecordComponent},
  {path: 'error', component: PageNotFoundComponent},
  {path: 'terms', component: TermsAndConditionsComponent},
  {path: 'internalerror', component: ServerErrorComponent},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: 'upp-register', component: RegisterComponent},
  {path: 'expert/add/post', component: AddPostComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

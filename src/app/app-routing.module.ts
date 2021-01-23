import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {IndexComponent} from './client/index/index.component';
import {PostComponent} from './client/post/post.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'error', component: PageNotFoundComponent},
  {path: 'terms', component: TermsAndConditionsComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UsersApiService } from './services/users-api.service';
import { ApiUrlService } from './config/api-url.service';
import { UserComponent } from './components/user/user.component';

const appRoutes: Routes = [
  { path: 'components/user', component: UserComponent }
];

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersApiService, ApiUrlService],
  bootstrap: [AppComponent]
})
export class AppModule {}

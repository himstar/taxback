import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UsersApiService } from './services/users-api.service';
import { ApiUrlService } from './config/api-url.service';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddComponent } from './components/add/add.component';
import { Error404Component } from './components/error404/error404.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add/:email', component: AddComponent },
  { path: 'user/:email/:uid', component: UserComponent },
  { path: 'update/:email/:uid', component: UpdateComponent },
  { path: 'delete/:email/:uid', component: DeleteComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UpdateComponent,
    DeleteComponent,
    AddComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersApiService, ApiUrlService],
  bootstrap: [AppComponent]
})
export class AppModule {}

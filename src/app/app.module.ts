import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module'
import { CourseRoutingModule } from './courses/course-routing.module';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './guards/auth-guard.guard';
import { UsersessionModule } from './usersession/usersession.module';
import { UserSessionRoutingModule } from './usersession/usersession-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CourseRoutingModule,
    ProfileModule,
    CoreModule,
    UserSessionRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

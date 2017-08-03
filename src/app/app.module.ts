import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { GroupEffects } from './effects/group';
import { UserEffects } from './effects/user';
import { reducer } from './reducers';
import { GroupListingComponent } from './components/group-listing';
import { GroupsContainer } from './containers/groups';
import { SelectUserContainer } from './containers/select-user';
import { ProfileContainer } from './containers/profile';
import { ProfileComponent } from './components/profile';
import { routes } from 'app/route';
import { UserLoadedGuard } from './guards/user-loaded';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileContainer,
    SelectUserContainer,
    GroupsContainer,
    GroupListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(GroupEffects),
    EffectsModule.run(UserEffects)
  ],
  providers: [
    AppService,
    UserLoadedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

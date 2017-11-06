import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule, MatCardModule, MatTooltipModule, MatButtonModule, MatPaginatorModule} from '@angular/material';
import {AppComponent} from "./app.component";
import {UserService, userServiceFactory} from "./user/user.service";
import {HttpModule} from "@angular/http";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [
    UserService,
    {provide: APP_INITIALIZER, useFactory: userServiceFactory, deps: [UserService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from "@angular/platform-browser";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {UserService, userServiceFactory} from "./user/user.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    {provide: APP_INITIALIZER, useFactory: userServiceFactory, deps: [UserService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

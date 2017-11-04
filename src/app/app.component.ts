import {Component, OnInit} from "@angular/core";
import {User} from "./user/user.model";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: Array<User>;

  constructor(userService: UserService) {
    this.users = userService.getUsers();
    //console.log(this.users);
  }

  ngOnInit() {
    console.log("AppComponent: OnInit()");
  }

}

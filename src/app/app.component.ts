import {Component, OnInit} from "@angular/core";
import {Hero} from "./entity/hero.model";
import {User} from "./user/user.model";
import {UserService} from "./user/user.service";
import {UserComponent} from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heres';
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };
  users:Array<User>;

  constructor(userService:UserService) {
    this.users = userService.getUsers();
    console.log(this.users);
  }

  ngOnInit() {
    console.log("AppComponent: OnInit()");
  }


}

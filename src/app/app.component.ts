import {Component, OnInit} from "@angular/core";
import {User} from "./user/user.model";
import {UserService} from "./user/user.service";
import {Pager} from './entity/pager.model'
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users:Array<User>;
  usersAll:Array<User>;
  usersCount:number = 0;

  usersPager: Pager = new Pager;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(userService:UserService) {
    this.usersPager.collection = userService.getUsers();
    this.usersPager.count = userService.getCountUsers();
    this.usersPager.limit = 10;
    //console.log(this.users);
  }

  updatePager($event: PageEvent){

    console.log($event);
    console.log(this.usersPager.limit);


  }
  ngOnInit() {
    console.log("AppComponent: OnInit()");
  }

}

import {Component, OnInit} from "@angular/core";
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  inputs: ['user']
})
export class UserComponent implements OnInit {

  user: User;

  constructor() {
  }

  ngOnInit() {
    console.log(this.user);
  }

  getDesignation(gender) {
    return (gender === 'men') ? 'Mr.' : 'M.';
  }

  setInfos(text: string, val: string) {
    console.log('text => ',text);
    console.log('val => ',val);
    return false;
  }
}

import {Component, OnInit, Input} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  info: any = {
    text: '',
    val: ''
  };

  constructor() {
  }

  ngOnInit() {
    this.setInfo('Hi, ' + this.getDesignation(this.user.gender), this.user.name.fullName);
  }

  getDesignation(gender) {
    return (gender === 'men') ? 'Mr.' : 'M.';
  }

  getBirthYear(age: string) {
    let today = new Date();
    return today.getFullYear() - parseInt(age);
  }

  setInfo(text: string, val: string) {
    this.info.text = text;
    this.info.val = val;
  }

}

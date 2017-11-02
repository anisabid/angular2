import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "./user.model";
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http:Http) {
  }

  private users:Array<User> = null;

  public getUsers():Array<User> {
    return this.users;
  }

  loadUsers() {
    console.log("loading Users");
    return new Promise((resolve, reject) => {
      this.http
        .get('/assets/mocks/users.json')
        .map(res => res.json())
        .subscribe(response => {
          this.users = response;
          console.log("Users loading complete");
          resolve(true);
        })
    })
  }

}

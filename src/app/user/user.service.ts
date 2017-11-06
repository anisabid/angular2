import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "./user.model";
import "rxjs/add/operator/map";


@Injectable()
export class UserService {

  public api:any = {
    users: '/assets/mocks/users.json'
  };

  constructor(private http:Http) {
  }

  private users:Array<User> = null;
  private count:number = 0;

  public getUsers():Array<User> {
    return this.users;
  }

  public getCountUsers():number {
    return this.count;
  }

  loadUsers() {
    console.log("loading Users");
    return new Promise((resolve, reject) => {
      this.http
        .get(this.api.users)
        .map(res => res.json())
        .subscribe(response => {
          this.count = response.count;
          this.users = response.results;
          console.log("Users loading complete");
          resolve(true);
        })
    })
  }
}

export function userServiceFactory(provider:UserService) {
  return () => provider.loadUsers();
}

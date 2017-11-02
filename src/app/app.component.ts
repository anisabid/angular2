import {Component} from "@angular/core";
import {Hero} from "./entity/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heres';
  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  }
}

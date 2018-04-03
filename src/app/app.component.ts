import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sunshine';
  address = {
    province: '福建',
    city: '厦门'
  };
  res = {};

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get(`/durgingredient/%E9%98%BF%E8%8E%AB`)
      .map(res => res.json())
      .subscribe(data => {
        if (data) {
          console.log(data);
          this.res = data; // (6)
        }
      });
  }
}

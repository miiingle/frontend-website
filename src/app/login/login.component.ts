import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Logger } from '../logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  accessToken = 'n/a';

  constructor(private api: ApiService, private log: Logger) { }

  ngOnInit() {
  }

  onLogin() {
    this.log.log('Pressed Login');

    this.api.fetchToken(this.username, this.password).subscribe(
      (data) => this.accessToken = data.access_token,
      this.log.log
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { Health } from './models';
import { ApiService } from './api.service';
import { Logger } from './logger.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-web';
  health: Observable<Health>;

  constructor(private api: ApiService, private log: Logger) {}

  ngOnInit(): void {
    this.fetchHealthStatus();
  }

  async fetchHealthStatus() {
    this.log.log('test');
    this.health = this.api.health();
  }
}

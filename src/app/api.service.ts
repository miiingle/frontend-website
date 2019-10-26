import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Health } from './models';
import { Logger } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private log: Logger) { }

    health() {
        this.log.log('attempting to fetch health status');
        return this.http.get<Health>('https://dev.api.miiingle.net/auth/actuator/health');
    }

}

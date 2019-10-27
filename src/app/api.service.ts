import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Health, OAuthToken } from './models';
import { Logger } from './logger.service';

import { environment as env } from './../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    static baseUrl = `${env.api.protocol}://${env.api.clientId}:${env.api.clientSecret}@${env.api.host}:${env.api.port}${env.api.path}`;

    constructor(private http: HttpClient, private log: Logger) { }

    health() {
        this.log.log('attempting to fetch health status');
        const url = `${ApiService.baseUrl}/actuator/health`;
        return this.http.get<Health>(url);
    }

    fetchToken(username: string, password: string) {
        this.log.log('Fetching Token');
        const url = `${ApiService.baseUrl}/oauth/token`;

        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        params.append('grant_type', 'password');
        params.append('client_id', env.api.clientId);

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            Authorization: 'Basic ' + btoa(`${env.api.clientId}:${env.api.clientSecret}`)
        });

        return this.http.post<OAuthToken>(url, params.toString(), { headers });
    }

}

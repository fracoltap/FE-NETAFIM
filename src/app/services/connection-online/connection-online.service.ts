import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { apiUrls } from 'src/app/shared/constants/apiurl.const';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConnectionOnlineService {

    public connected$ = new BehaviorSubject<boolean>(false);
    private config = environment.apiUrl + apiUrls.keepAliveApi;
    private source = interval(5000);

    private _isConnected = false;
    public get isConnected(): boolean { return this._isConnected; }

    constructor(private http: HttpClient) {
        this.callKeepAlive();

        this.source.subscribe(() => {
            this.callKeepAlive();
        });

        this.connected$.subscribe(connected => {
            console.log('Online Api: ', connected);
        });
    }

    private callKeepAlive() {
        this.http.get(this.config, { observe: 'response' })
            .pipe(first())
            .subscribe(resp => {
                if (resp.status === 200) {
                    this.setConnectedState(true);
                } else {
                    this.setConnectedState(false);
                }
            }, err => {
                this.setConnectedState(false);
            });
    }

    private setConnectedState(data: boolean) {
        this._isConnected = data;
        this.connected$.next(this._isConnected);
    }
}


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UrlService {
  private previousUrl: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public previousUrl$: Observable<string> = this.previousUrl.asObservable();

  private currentUrl: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public currentUrl$: Observable<string> = this.currentUrl.asObservable();

  constructor() { }

  setPreviousUrl(previousUrl: string) {
    this.previousUrl.next(previousUrl);
  }

  setCurrentUrl(currentUrl: string) {
    this.currentUrl.next(currentUrl);
  }
}
